import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      user_name,
      user_email,
      user_phone,
      user_address,
      plan_name,
      payment_amount, // kuruş cinsinden (örn: 12000 TL = 1200000)
    } = body;

    // PayTR kimlik bilgileri
    const merchant_id = process.env.PAYTR_MERCHANT_ID!;
    const merchant_key = process.env.PAYTR_MERCHANT_KEY!;
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT!;
    const test_mode = process.env.PAYTR_TEST_MODE || "1";

    // Zorunlu alan kontrolü
    if (!user_name || !user_email || !user_phone || !payment_amount) {
      return NextResponse.json(
        { error: "Eksik bilgi. Lütfen tüm alanları doldurun." },
        { status: 400 }
      );
    }

    // Benzersiz sipariş numarası oluştur (PayTR sadece alfanümerik kabul eder)
    const merchant_oid = `WM${Date.now()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Kullanıcı IP adresi
    const user_ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "85.111.111.111";

    // Sepet bilgisi (base64 encoded JSON)
    const user_basket = Buffer.from(
      JSON.stringify([[plan_name, String(payment_amount), 1]])
    ).toString("base64");

    // Ödeme ayarları
    const no_installment = "0"; // Taksit açık
    const max_installment = "0"; // Tüm taksit seçenekleri
    const currency = "TL";
    const timeout_limit = "30"; // Dakika

    // Başarılı ve başarısız yönlendirme URL'leri
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmimar.com.tr";
    const merchant_ok_url = `${siteUrl}/odeme/basarili`;
    const merchant_fail_url = `${siteUrl}/odeme/hata`;

    // PayTR token oluşturma (HMAC-SHA256)
    const hash_str =
      merchant_id +
      user_ip +
      merchant_oid +
      user_email +
      String(payment_amount) +
      user_basket +
      no_installment +
      max_installment +
      currency +
      test_mode;

    const paytr_token = crypto
      .createHmac("sha256", merchant_key)
      .update(hash_str + merchant_salt)
      .digest("base64");

    // PayTR API'ye token isteği gönder
    const formData = new URLSearchParams({
      merchant_id,
      user_ip,
      merchant_oid,
      email: user_email,
      payment_amount: String(payment_amount),
      paytr_token,
      user_basket,
      debug_on: "1",
      no_installment,
      max_installment,
      currency,
      test_mode,
      user_name,
      user_address: user_address || "Türkiye",
      user_phone,
      merchant_ok_url,
      merchant_fail_url,
      timeout_limit,
      lang: "tr",
    });

    const paytrResponse = await fetch(
      "https://www.paytr.com/odeme/api/get-token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      }
    );

    const paytrData = await paytrResponse.json();

    if (paytrData.status === "success") {
      return NextResponse.json({
        status: "success",
        token: paytrData.token,
        merchant_oid,
      });
    } else {
      console.error("PayTR Token Hatası:", paytrData);
      return NextResponse.json(
        {
          error:
            paytrData.reason ||
            "Ödeme başlatılamadı. Lütfen tekrar deneyin.",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Checkout API Hatası:", error);
    return NextResponse.json(
      { error: "Sunucu hatası. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}

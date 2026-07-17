import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const merchant_oid = formData.get("merchant_oid") as string;
    const status = formData.get("status") as string;
    const total_amount = formData.get("total_amount") as string;
    const hash = formData.get("hash") as string;

    const merchant_key = process.env.PAYTR_MERCHANT_KEY!;
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT!;

    // Hash doğrulama
    const hash_str = merchant_oid + merchant_salt + status + total_amount;
    const computed_hash = crypto
      .createHmac("sha256", merchant_key)
      .update(hash_str)
      .digest("base64");

    if (hash !== computed_hash) {
      console.error("PayTR Callback: Hash doğrulama başarısız!", {
        merchant_oid,
        status,
      });
      return new NextResponse("HASH FAIL", { status: 400 });
    }

    // Ödeme başarılı
    if (status === "success") {
      console.log(`✅ Ödeme başarılı! Sipariş: ${merchant_oid}, Tutar: ${total_amount}`);
      // Burada veritabanına yazma, e-posta gönderme gibi işlemler yapılabilir
      // Örnek: await db.orders.update({ merchant_oid, status: 'paid' })
    } else {
      const failed_reason_code = formData.get("failed_reason_code") as string;
      const failed_reason_msg = formData.get("failed_reason_msg") as string;
      console.log(
        `❌ Ödeme başarısız! Sipariş: ${merchant_oid}, Sebep: ${failed_reason_code} - ${failed_reason_msg}`
      );
    }

    // PayTR'ye mutlaka "OK" dönülmeli, aksi halde bildirim tekrar gönderilir
    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error("Callback API Hatası:", error);
    return new NextResponse("ERROR", { status: 500 });
  }
}

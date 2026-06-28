# WebMimar

Profesyonel web tasarım ajansı landing page — Next.js kaynak projesi.

## Kurulum

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Build (statik export)

```bash
npm run build
```

Çıktı `out/` klasörüne yazılır. GitHub Pages veya herhangi bir statik hosting'e deploy edebilirsin.

## Proje yapısı

```
app/                  → Sayfalar (App Router)
components/home/      → Ana sayfa bölümleri
components/demo/      → Demo şablon bileşenleri
components/layout/    → Header, Footer
lib/data/site-data.ts → Fiyatlar, SSS, portfolyo verileri
lib/constants.ts      → İletişim bilgileri
public/               → logo, favicon
legacy-out/           → Eski static export yedeği
```

## Değişiklik yapmak

- **Fiyatlar / SSS / metinler:** `lib/data/site-data.ts`
- **Telefon / e-posta:** `lib/constants.ts`
- **Ana sayfa bölümleri:** `components/home/`
- **Demo siteler:** `app/demo/*/page.tsx`
- **Renkler / tema:** `app/globals.css`

## Sayfalar

| URL | Açıklama |
|-----|----------|
| `/` | Ana landing page |
| `/demo/berber` | Berber demo |
| `/demo/restoran` | Restoran demo |
| `/demo/dis-klinigi` | Diş kliniği demo |
| `/demo/oto-servis` | Oto servis demo |
| `/demo/emlak` | Emlak demo |

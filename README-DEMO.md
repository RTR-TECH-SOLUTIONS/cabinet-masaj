# Demo: cabinet de masaj („Tihna”, Iași)

Demo de prezentare pentru un terapeut individual. Astro 7 + Tailwind 4, o singură pagină, output static.

```
npm install
npm run dev      # previzualizare locală
npm run build    # dist/ static, se urcă pe Hostinger
```

## Ce e placeholder

Tot ce ține de client e inventat și stă în două fișiere:

- `src/data/site.ts`: nume („Tihna”), terapeut, oraș, adresă, telefon, WhatsApp, program, nota Google.
- `src/data/masaje.ts`: tipurile de masaj, duratele, tarifele, abonamentele.

În `src/pages/index.astro` sunt de înlocuit: textul din „Cine te masează”, recenziile, întrebările frecvente și indicațiile de acces.

Pozele din `src/assets/foto/` sunt de pe Unsplash (licență liberă). Se înlocuiesc cu pozele clientului, în primul rând: hero, cabinetul (`cabinet-2.jpg`) și cea din „Cum decurge o ședință”.

Marcajele `TODO(real)` din cod arată fiecare loc.

## Ce funcționează

- Lista de tarife e și formular de programare: alegi ședința, ziua, partea zilei, iar butonul deschide WhatsApp cu mesajul gata scris.
- Dalele din „Masaje” duc la tariful respectiv și îl preselectează.
- Meniu mobil, bară fixă „Sună / WhatsApp” pe telefon, buton WhatsApp în colț pe desktop.
- Întrebări frecvente, hartă Google.

## Dacă clientul acceptă

1. Datele reale (nume, adresă, telefon, tarife, poze, recenzii de pe Google).
2. Research SEO local („masaj + oraș”, „masaj terapeutic + oraș”), title/meta/H1, schema `LocalBusiness`, sitemap, robots.
3. Pachet legal: banner cookie, Termeni, Confidențialitate, Politica de cookies, credit RTR în footer.
4. Opțional: voucher cadou ca pagină separată, calendar cu ore libere, panou de editare a tarifelor (Keystatic).
5. Domeniu + deploy pe Hostinger, Google Business Profile.

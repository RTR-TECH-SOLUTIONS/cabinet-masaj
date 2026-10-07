// Datele cabinetului. Tot ce e aici e placeholder de demo.
// TODO(real): nume, telefon, adresă, program și coordonate de la client.

export const site = {
  name: 'Tihna',
  descriptor: 'cabinet de masaj',
  therapist: 'Ioana Căpraru',
  city: 'Iași',
  area: 'Copou',
  address: 'Str. Lascăr Catargi nr. 14, Copou, Iași',
  phoneDisplay: '0740 123 456',
  phoneHref: 'tel:+40740123456',
  whatsapp: '40740123456',
  email: 'programari@tihna-masaj.ro',
  mapQuery: 'Strada Lascăr Catargi 14, Iași',
  google: { score: '4,9', count: 87 },
  program: [
    { zile: 'Luni – Vineri', ore: '9:00 – 20:00' },
    { zile: 'Sâmbătă', ore: '9:00 – 14:00' },
    { zile: 'Duminică', ore: 'închis' },
  ],
} as const;

export const nav = [
  { label: 'Masaje', href: '#masaje' },
  { label: 'Tarife', href: '#tarife' },
  { label: 'Despre', href: '#despre' },
  { label: 'Întrebări', href: '#intrebari' },
  { label: 'Contact', href: '#contact' },
] as const;

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waDefault = waLink('Bună ziua! Aș dori o programare la masaj.');

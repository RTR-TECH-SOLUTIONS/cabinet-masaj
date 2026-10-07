import type { ImageMetadata } from 'astro';

import relaxare from '../assets/foto/relaxare.jpg';
import terapeutic from '../assets/foto/terapeutic.jpg';
import deepTissue from '../assets/foto/deep-tissue.jpg';
import pietreCalde from '../assets/foto/pietre-calde.jpg';
import reflexoterapie from '../assets/foto/reflexoterapie.jpg';
import spate from '../assets/foto/spate.jpg';

export interface Sedinta {
  minute: number;
  pret: number;
}

export interface Masaj {
  id: string;
  nume: string;
  pentru: string;
  descriere: string;
  foto: ImageMetadata;
  alt: string;
  sedinte: Sedinta[];
}

// TODO(real): lista și tarifele reale ale clientului.
export const masaje: Masaj[] = [
  {
    id: 'terapeutic',
    nume: 'Masaj terapeutic',
    pentru: 'Dureri de spate, ceafă și umeri',
    descriere:
      'Lucrez punctual pe zona care te supără: cervicală, lombară, umeri blocați de la birou. Presiune medie spre fermă, pe care o reglăm împreună.',
    foto: terapeutic,
    alt: 'Mâinile terapeutului apăsând cu pumnul pe musculatura spatelui',
    sedinte: [
      { minute: 60, pret: 190 },
      { minute: 90, pret: 250 },
    ],
  },
  {
    id: 'relaxare',
    nume: 'Masaj de relaxare',
    pentru: 'Oboseală, stres, somn prost',
    descriere:
      'Mișcări lungi și lente pe tot corpul, cu ulei cald de migdale. Presiune ușoară, fără zone dureroase.',
    foto: relaxare,
    alt: 'Mâini care masează ușor gamba, pe un prosop alb',
    sedinte: [
      { minute: 60, pret: 170 },
      { minute: 90, pret: 230 },
    ],
  },
  {
    id: 'deep-tissue',
    nume: 'Deep tissue',
    pentru: 'Mușchi încordați, sportivi',
    descriere:
      'Presiune profundă, lentă, pe straturile de mușchi care nu se relaxează la un masaj obișnuit. A doua zi poți simți zona lucrată.',
    foto: deepTissue,
    alt: 'Degetele mari apăsând adânc de-a lungul coloanei',
    sedinte: [
      { minute: 60, pret: 200 },
      { minute: 90, pret: 270 },
    ],
  },
  {
    id: 'pietre-calde',
    nume: 'Masaj cu pietre calde',
    pentru: 'Tensiune care nu cedează, frig în corp',
    descriere:
      'Pietre de bazalt încălzite la 50 °C, așezate de-a lungul spatelui și folosite la masaj. Căldura ajunge mai adânc decât mâna.',
    foto: pietreCalde,
    alt: 'Pietre negre de bazalt așezate în șir pe coloană',
    sedinte: [{ minute: 90, pret: 280 }],
  },
  {
    id: 'reflexoterapie',
    nume: 'Reflexoterapie',
    pentru: 'Picioare obosite, statul în picioare',
    descriere:
      'Presopunctură pe talpă, de la călcâi la degete. Începe cu o baie caldă pentru picioare.',
    foto: reflexoterapie,
    alt: 'Mâini care masează talpa piciorului pe un cearșaf alb',
    sedinte: [{ minute: 45, pret: 140 }],
  },
  {
    id: 'spate',
    nume: 'Spate, gât și umeri',
    pentru: 'Pauza de prânz',
    descriere:
      'Varianta scurtă, doar pe partea de sus a corpului. Intri în pauza de masă și te întorci la birou.',
    foto: spate,
    alt: 'Masaj pe partea de sus a spatelui',
    sedinte: [
      { minute: 30, pret: 100 },
      { minute: 45, pret: 140 },
    ],
  },
];

export const abonamente = [
  { nume: '5 ședințe', detaliu: 'valabil 3 luni, orice tip de masaj', reducere: '10% reducere' },
  { nume: '10 ședințe', detaliu: 'valabil 6 luni, orice tip de masaj', reducere: '15% reducere' },
];

export function pretMinim(m: Masaj): number {
  return Math.min(...m.sedinte.map((s) => s.pret));
}

export function durate(m: Masaj): string {
  return m.sedinte.map((s) => s.minute).join(' sau ') + ' min';
}

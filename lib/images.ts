/**
 * All images served via Cloudinary with transforms baked in:
 *   f_auto  → serves WebP to browsers that support it, AVIF where possible
 *   q_auto  → Cloudinary picks the optimal quality (usually 70-80)
 *   w_NNN   → caps the pixel width so we never ship a 4 000px image to a phone
 *   c_limit → only downscales, never upscales
 *
 * Next.js Image still generates its own srcset on top of this, giving a
 * second layer of responsive delivery. Together they cut payload 60-80 %.
 */

const CLD = 'https://res.cloudinary.com/dwsl2ktt2/image/upload'

/** Build a Cloudinary URL with the given transform string */
function cld(transforms: string, path: string) {
  return `${CLD}/${transforms}/${path}`
}

export const IMAGES = {
  // ── Portraits / hero images ──────────────────────────────────────────────
  // portrait1 is a PNG hero — convert to WebP, cap at 1600 px wide
  logo:      cld('f_auto,q_auto,w_200,c_limit',  'v1777771615/akuafeyielogo_ypjemo.jpg'),
  portrait1: cld('f_auto,q_auto,w_1600,c_limit', 'v1777771616/1_rb57bj.png'),
  portrait2: cld('f_auto,q_auto,w_900,c_limit',  'v1777771615/2_oxwowz.jpg'),
  portrait3: cld('f_auto,q_auto,w_900,c_limit',  'v1777771615/3_rde2bb.jpg'),
  portrait4: cld('f_auto,q_auto,w_900,c_limit',  'v1777771616/4_vzsfnq.jpg'),
  // photo5 is a PNG — convert to WebP, cap at 1600 px for full-bleed sections
  photo5:    cld('f_auto,q_auto,w_1600,c_limit', 'v1777771617/5_ftohta.png'),
  photo6:    cld('f_auto,q_auto,w_900,c_limit',  'v1777771616/6_l8ajdj.png'),

  // ── Company logos ─────────────────────────────────────────────────────────
  // Logos only ever render at ~80 px wide — no point serving more
  logoMoonlight: cld('f_auto,q_auto,w_160,c_limit', 'v1777772336/moonlkight_tcagr8.png'),
  logoEagle:     cld('f_auto,q_auto,w_160,c_limit', 'v1777772336/eagle_ubrnab.png'),
  logoAirbnb:    cld('f_auto,q_auto,w_160,c_limit', 'v1777772336/airbnb_t7dxeq.jpg'),
  logoSmic360:   cld('f_auto,q_auto,w_160,c_limit', 'v1777772500/download_pi7vlg.jpg'),

  // ── About page background ─────────────────────────────────────────────────
  aboutBg:      cld('f_auto,q_auto,w_1600,c_limit', 'v1777773928/backkk_mbfzyh.jpg'),

  // ── Real-estate hero ─────────────────────────────────────────────────────
  phoenixHero:  cld('f_auto,q_auto,w_1600,c_limit', 'v1777196963/1_j6fe4u.jpg'),
} as const

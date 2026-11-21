---
name: Coquette Scrapbook & Tactile Paper Craft
colors:
  surface: '#fef8f2'
  surface-dim: '#dfd9d3'
  surface-bright: '#fef8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3ed'
  surface-container: '#f3ede7'
  surface-container-high: '#ede7e1'
  surface-container-highest: '#e7e2dc'
  on-surface: '#1d1b18'
  on-surface-variant: '#4f4442'
  inverse-surface: '#32302c'
  inverse-on-surface: '#f6f0ea'
  outline: '#817471'
  outline-variant: '#d3c3c0'
  surface-tint: '#6f5954'
  primary: '#42302b'
  on-primary: '#ffffff'
  primary-container: '#5a4641'
  on-primary-container: '#d0b5ae'
  inverse-primary: '#dcc0ba'
  secondary: '#52606a'
  on-secondary: '#ffffff'
  secondary-container: '#d5e5f0'
  on-secondary-container: '#586670'
  tertiary: '#403033'
  on-tertiary: '#ffffff'
  tertiary-container: '#58464a'
  on-tertiary-container: '#cdb5b9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fadcd5'
  primary-fixed-dim: '#dcc0ba'
  on-primary-fixed: '#271814'
  on-primary-fixed-variant: '#56423d'
  secondary-fixed: '#d5e5f0'
  secondary-fixed-dim: '#bac9d4'
  on-secondary-fixed: '#0f1d25'
  on-secondary-fixed-variant: '#3b4952'
  tertiary-fixed: '#f6dce0'
  tertiary-fixed-dim: '#d9c1c5'
  on-tertiary-fixed: '#25181b'
  on-tertiary-fixed-variant: '#544246'
  background: '#fef8f2'
  on-background: '#1d1b18'
  surface-variant: '#e7e2dc'
  blue-fabric-dark: '#9CB4C4'
  pink-card: '#E5D1D4'
  pink-envelope: '#F5E6E4'
  cream-paper-card: '#FAF6F2'
  ribbon-brown: '#8A6F63'
  gold-accent: '#D4AF37'
  cocoa-soft: rgba(90, 70, 65, 0.72)
  cocoa-muted: rgba(90, 70, 65, 0.45)
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-xxl: 4rem
---

# Design System: Coquette Scrapbook & Paper Craft
**Project**: Veiga Mumtaza El Rahma Personal Portfolio  
**Aesthetic Theme**: Tactile Coquette Scrapbook, Textured Fabric, Handmade Paper Collage & Satin Ribbon Accents  
**Version**: 1.0.0  

---

## 1. Brand Identity & Design Philosophy
Desain ini menggabungkan kehangatan estetika kriya tangan (handmade paper craft) dan kelembutan gaya coquette vintage dengan presisi struktural akademisi teknik informatika & public speaker. Karakter visual didasarkan pada sensasi taktil: tekstur kain rajut halus, kertas bergaris krem, stiker potong tepi putih (die-cut sticker), aksen renda katun putih (scalloped lace), selotip washi (washi tape), dan pita satin (satin bow ribbon).

## 2. Color Palette & Design Tokens
```css
:root {
  /* Surface & Fabric Colors */
  --blue-fabric: #B4C3CE;        /* Dusty Pastel Blue - Kain latar seksi utama & ganjil */
  --blue-fabric-dark: #9CB4C4;   /* Aksen biru lebih pekat untuk pita & label */
  --pink-fabric: #D5BDC1;        /* Dusty Blush Pink - Kain latar seksi genap */
  --pink-card: #E5D1D4;          /* Soft Pink Paper Card fill */
  --pink-envelope: #F5E6E4;      /* Cream Pink untuk amplop & folder */
  --cream-paper: #F7F1EB;        /* Warm Cream Paper / Sheet background */
  --cream-paper-card: #FAF6F2;   /* Kertas catatan bergaris / card background */
  --white-pure: #FFFFFF;         /* Warna tepi stiker, renda, dan tag bersih */

  /* Ink & Typography Colors */
  --cocoa-ink: #5A4641;          /* Dark Cocoa Brown - Warna teks utama & outline */
  --cocoa-soft: rgba(90, 70, 65, 0.72); /* Secondary text / sub-keterangan */
  --cocoa-muted: rgba(90, 70, 65, 0.45); /* Border halus, ruled lines, placeholder */

  /* Accents & Ribbon Tones */
  --ribbon-blue: #9CB4C4;        /* Pita satin biru muda */
  --ribbon-brown: #8A6F63;       /* Pita satin cokelat kakao klasik */
  --gold-accent: #D4AF37;        /* Aksen medali / bintang prestasi */

  /* Shadows & Depth */
  --shadow-sticker: drop-shadow(0 0 0 4px #FFFFFF) drop-shadow(0 6px 14px rgba(90, 70, 65, 0.16));
  --shadow-polaroid: 0 10px 24px -4px rgba(90, 70, 65, 0.18), 0 2px 6px rgba(90, 70, 65, 0.08);
  --shadow-card: 0 6px 18px rgba(90, 70, 65, 0.08), 0 1px 3px rgba(90, 70, 65, 0.05);
  --shadow-button: 0 4px 0 #FFFFFF, 0 6px 14px rgba(90, 70, 65, 0.2);
}
```

## 3. Typography
- **Display Script / Calligraphy**: 'Great Vibes', 'Sacramento'
- **Display Editorial Serif**: 'Playfair Display'
- **Body & Clean UI Labels**: 'Plus Jakarta Sans'

## 4. Components & Motifs
- **Die-Cut Sticker Effect**: White outline 4px with gentle cocoa drop shadow.
- **Scalloped Lace Border**: White repeating floral lace divider.
- **Polaroid Frames**: Off-white photo border with tilt (-4deg to +4deg) and washi tape.
- **Floating Pill Nav**: Backdrop-blur acrylic pill container.
- **Action Buttons**: Cocoa pill buttons with white 4px underline offset shadow.
export const CONTAINER = {
  WIDTH: '1170px',
  PADDING: '1rem',
}

export const COLOURS = {
  primary: '#4ABDAC',
  primaryRGB: '74, 189, 172',
  secondary: '#FC4A1A',
  secondaryHighlight: '#F7B733',

  grey: '#DFDCE3',
  darkGrey: '#919092',

  white: '#FFF',
  whiteRGB: '255, 255, 255',
  black: '#090909',
  blackRGB: '0, 0, 0',
}

export const PADDINGS = {
  XXS: '6px',
  XS: '10px',
  S: '20px',
  M: '30px',
  L: '50px',
  XL: '80px',
}

export const BREAKPOINTS = {
  DESKTOP: '1800px',
  TABLETLAND: '1200px',
  TABLETPORT: '900px',
  PHONE: '600px',
  DEFAULT: '601px',
}

export const MEDIAQUERY = {
  //0 - 600px: Phone
  //600 - 900px: Tablet portrait
  //900 - 1200px: Tablet landscape
  //[1200-1800]: Desktop first - this is where all our normal styles appear
  //1800px +: Big desktop

  //em are better than rem's in Media Queries - more stable. 
  //1em = 20px - Default font size is set at 20px from Typography Sutro Theme

  // Order of applying media queries
  // Base/Global + tyography > General Layout + grid > page layout > components

  bigDesktop: '@media (min-width: 90em)', //1800px
  tabletLand: '@media (max-width: 60em)', //1200px 
  tabletPort: '@media (max-width: 45em)', //900px 900/20
  phone: '@media (max-width: 30em)', //600px 600/20
}

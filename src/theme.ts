const namedColors = {
  alabaster: '#f9fafb',
  amber: '#f59e0b',
  black: '#000000',
  blue: '#3b82f6',
  cobalt: '#1e40af',
  coolGray: '#9ca3af',
  coral: '#fb923c',
  darkBlue: '#1e3a8a',
  darkGreen: '#064e3b',
  darkRed: '#b91c1c',
  deepGray: '#374151',
  emerald: '#10b981',
  forestGreen: '#047857',
  gold: '#d97706',
  graphite: '#111827',
  gray: '#6b7280',
  green: '#059669',
  jade: '#34d399',
  lightBlue: '#93c5fd',
  lightCoral: '#ffe4e6',
  lightGray: '#f3f4f6',
  lightGreen: '#d1fae5',
  lightOrange: '#fdba74',
  lightRed: '#fee2e2',
  lightYellow: '#fef3c7',
  midnight: '#1f2937',
  navy: '#1d4ed8',
  orange: '#ea580c',
  paleYellow: '#fde68a',
  peach: '#fed7aa',
  pink: '#fcd34d',
  rose: '#e0f2fe',
  sand: '#ffedd5',
  slate: '#4b5563',
  smoke: '#e5e7eb',
  softPink: '#ffe4e6',
  steel: '#2563eb',
  storm: '#065f46',
  sun: '#fbbf24',
  sunset: '#f97316',
  teal: '#6ee7b7',
  twilight: '#78350f',
  white: '#FFFFFF',
  yellow: '#fcd34d',
};

// Main colors object using named colors
const colors = {
  primary: {
    50: namedColors.lightBlue,
    100: namedColors.rose,
    200: namedColors.peach,
    300: namedColors.lightOrange,
    400: namedColors.coral,
    500: namedColors.sunset,
    600: namedColors.orange,
    700: namedColors.gold,
    800: namedColors.twilight,
    900: namedColors.darkRed,
  },
  secondary: {
    50: namedColors.alabaster,
    100: namedColors.lightGreen,
    200: namedColors.teal,
    300: namedColors.jade,
    400: namedColors.emerald,
    500: namedColors.green,
    600: namedColors.forestGreen,
    700: namedColors.storm,
    800: namedColors.darkGreen,
    900: namedColors.deepGray,
  },
  gray: {
    50: namedColors.alabaster,
    100: namedColors.lightGray,
    200: namedColors.smoke,
    300: namedColors.coolGray,
    400: namedColors.gray,
    500: namedColors.slate,
    600: namedColors.deepGray,
    700: namedColors.midnight,
    800: namedColors.graphite,
    900: namedColors.black,
  },
  error: {
    100: namedColors.lightRed,
    500: namedColors.blue,
    700: namedColors.darkRed,
  },
  warning: {
    100: namedColors.lightYellow,
    500: namedColors.amber,
    700: namedColors.gold,
  },
  success: {
    100: namedColors.lightGreen,
    500: namedColors.emerald,
    700: namedColors.forestGreen,
  },
  info: {
    100: namedColors.rose,
    500: namedColors.blue,
    700: namedColors.cobalt,
  },
  black: namedColors.black,
  white: namedColors.white,
};

const theme = {
  colors,
  gradients: {
    hero: {
      start: colors.primary[500],
      end: colors.primary[700],
    },
    button: {
      start: colors.secondary[400],
      end: colors.secondary[600],
    },
    card: {
      start: colors.gray[100],
      end: colors.gray[200],
    },
    overlay: {
      start: 'rgba(0, 0, 0, 0.8)',
      end: 'rgba(0, 0, 0, 0.3)',
    },
  },
  spacing: {
    0: '0rem',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    4: '1rem',
    8: '2rem',
    16: '4rem',
    32: '8rem',
    48: '12rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    sectionPadding: '5rem',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '2.625rem',
    '6xl': '3rem',
    '7xl': '3.375rem',
    '8xl': '3.75rem',
    '9xl': '4.125rem',
    headingLg: '2.5rem',
    headingMd: '2rem',
    headingSm: '1.5rem',
    body: '1rem',
    subtext: '0.875rem',
  },
  fontWeights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeights: {
    tight: '1.1',
    normal: '1.5',
    relaxed: '1.75',
  },
  letterSpacing: {
    tight: '-0.015em',
    normal: '0',
    wide: '0.05em',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    xl2: '1.25rem',
    xl3: '1.75rem',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.06)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.05)',
    deep: '0 10px 25px rgba(0, 0, 0, 0.2)',
    hover: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
  transitions: {
    default: '200ms ease-in-out',
    fast: '100ms ease-in-out',
    delayed: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '300ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
};

// TypeScript Types for Safety
export type ThemeSemanticColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type ThemeSpacingToken = keyof typeof theme.spacing;
export type ThemeTypography =
  | keyof typeof theme.fontSizes
  | keyof typeof theme.lineHeights;

export default theme;

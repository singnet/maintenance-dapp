import { createTheme } from '@mui/material/styles';
import colors from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface TypeBackground {
    highlight: string;
  }
  interface PaletteOptions {
    bgHighlight?: { light?: string; main: string; dark?: string; contrastText?: string };
    bgGradient?: { light?: string; main: string; dark?: string; contrastText?: string };
    bgGradientHighlight?: { light?: string; main: string; dark?: string; contrastText?: string };
    bgBox?: { light?: string; main: string; dark?: string; contrastText?: string };
    bgtext?: { light?: string; main: string; dark?: string; contrastText?: string };
    note?: { light?: string; main: string; dark?: string; contrastText?: string };
    bgFocus?: { light?: string; main: string; dark?: string; contrastText?: string };

    textAdvanced?: { primary: string; secondary: string; tertiary: string; dark: string; grey: string; white: string };
    alertMsg?: {
      errorBorder: string;
      errorBg: string;
      successBorder: string;
      successBg: string;
      pendingBorder: string;
      pandingBg: string;
      main: string;
    };
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    priority: true;
    normal: true;
    small: true;
    link: true;
    label: true;
    menu: true;
  }
}

export const lightTheme = createTheme({
  palette: {
    common: { black: colors.BLACK, black1: colors.BLACK_1, white: colors.WHITE, grey: colors.GREY, grey1: colors.GREY_1,  },
    primary: { main: colors.DARK_BLUE },
    secondary: { main: colors.LIGHT_TEAL, light: colors.PENDING_BORDER },
    bgHighlight: { main: colors.WHITE_2 },
    headerBlue: { main: colors.HEADER_BLUE},
    bgGradient: { main: colors.GRADIENT_1 },
    bgGradientHighlight: { main: colors.GRADIENT_BOX },
    background: { default: colors.WHITE, paper: colors.WHITE, purple: colors.PURPLE },
    text: { primary: colors.BLACK, secondary: colors.WHITE_2 },
    error: { light: colors.LIGHT_RED, main: colors.DARK_RED, contrastText: colors.DARK_RED },
    info: { light: colors.LIGHT_BLUE, main: colors.DARK_BLUE, contrastText: colors.DARK_BLUE },
    success: { main: colors.GREEN },
    bgFocus: { main: colors.OFF_WHITE },
    textAdvanced: {
      primary: colors.BLACK,
      secondary: colors.WHITE_2,
      tertiary: colors.PURPLE,
      dark: colors.DARK_GREY,
      grey: colors.LIGHT_GREY,
      grey2: colors.GREY_2,
      grey3: colors.GREY_3,
      white: colors.WHITE,
      red: colors.RED,
    },
    bgBox: { main: colors.PURPLE },
    bgtext: { main: colors.DARK_BLUE },
    alertMsg: {
      errorBorder: colors.ERROR_BORDER,
      errorBg: colors.ERROR_BG,
      successBorder: colors.SUCCESS_BORDER,
      successBg: colors.SUCCESS_BG,
      pendingBorder: colors.PENDING_BORDER,
      pandingBg: colors.PENDING_BG,
      main: colors.ERROR_BORDER,
      successGreen: colors.SUCCESS_GREEN,
    },
    note: {
      main: colors.ARC_LIGHT,
    },
  },
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: '56px',
      letterSpacing: '-1px',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '56px',
      letterSpacing: '-0.67px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: 0,
    },
    h4: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: 0,
    },
    h5: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: 0,
    },
    priority: {
      fontSize: '18px',
      lineHeight: '29px',
      letterSpacing: 0,
    },
    normal: {
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: 0,
    },
    small: {
      fontSize: '10px',
      lineHeight: '13px',
      fontWeight: 500,
      letterSpacing: 0,
    },
    link: {
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 600,
      letterSpacing: 0,
    },
    label: {
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: 0,
    },
    menu: {
      fontSize: '16px',
      lineHeight: '19px',
      fontWeight: 500,
      letterSpacing: 0,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: colors.WHITE,
          },
        },
      ],
    },
  },
});

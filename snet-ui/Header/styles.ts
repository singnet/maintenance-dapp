import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const headerStyles = makeStyles((theme: Theme) => ({
  header: {
    background: `${theme.palette.background.purple} !important`,
    boxShadow: '0 2px 3px 0 rgba(0,0,0,0.1)',
    '& .MuiToolbar-root': {
      maxWidth: '1160px',
      width: '100%',
      padding: 0,
      margin: '0 auto',
      '@media(max-width: 640px)': {
        padding: '15px 0',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    '@media(max-width: 1200px)': { padding: '0 20px' },
  },
  rightMobileMenu: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    '@media(max-width: 640px)': { margin: '15px 0 0 0' },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& a': { lineHeight: 0 },
    '& span': {
      marginLeft: 8,
      color: `${theme.palette.common.white}`,
      fontSize: 22,
      fontFamily: 'MuliRegular',
      fontWeight: 300,
      letterSpacing: -0.5,
      lineHeight: '30px',
      '@media(max-width:690px)': { fontSize: 16 },
    },
    '@media(max-width:1023px)': { marginLeft: 40 },
  },
  navlinks: {
    marginLeft: 'auto',
  },
  link: {
    color: '#FFFFFF',
    fontFamily: 'Muli',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '19px',
  },
  customDrawer: {
    '& .MuiDrawer-paper': {
      background: 'linear-gradient(180deg, #061753 0%, #184FA7 100%)',
      '& ul': {
        '& li': {
          '& a': {
            color: '#fff',
          },
        },
      },
    },
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    '& h1': {
      margin: 0,
      lineHeight: 0,
      '& a': { textDecoration: 'none' },
      '& span': {
        '&:before': { fontSize: 45 },
      },
    },
  },
  logoAnchor: {
    display: 'inline-block',
    color: `${theme.palette.common.white}`,
    '& img': {
      width: 180,
      '@media(max-width:400px)': { width: 140 },
    },
  },
  navigationSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& nav': {
      '& > ul': {
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        '& > li': {
          paddingLeft: 40,
          listStyle: 'none',
          '& a': {
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            color: `${theme.palette.common.white}`,
            fontFamily: 'MuliSemiBold',
            fontSize: 16,
            lineHeight: '20px',
            textDecoration: 'none',
            '&:hover': { color: `${theme.palette.alertMsg.pendingBorder}` },
          },
          '&:first-of-type': { paddingLeft: 0 },
        },
      },
    },
    '@media(max-width:1023px)': { display: 'none' },
  },
  active: { color: 'red' },
  megaMenuContainer: {
    width: 628,
    borderRadius: 4,
    display: 'none',
    position: 'absolute',
    top: 60,
    left: '50%',
    backgroundColor: '#fff',
    boxShadow:
      '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
    transform: 'translateX(-50%)',
    cursor: 'default',
    '& > div': { borderTop: '1px solid #D6D6D6' },
    '& h5': {
      padding: '16px 24px',
      margin: 0,
      color: 'black',
      fontSize: 14,

      fontWeight: 600,
      lineHeight: '18px',
      textTransform: 'uppercase',
    },
    '& a': {
      width: 309,
      padding: '11px 14px 12px 16px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#fafafa',
        '& h6': { color: 'black' },
        '& span': {
          color: 'black',
          fontWeight: 'bold',
        },
      },
    },
  },
  megaMenues: {
    '& ul': {
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      '& li': {
        paddingLeft: 0,
        listStyle: 'none',
        '& a': { textDecoration: 'none' },
      },
    },
  },
  megaMenuContent: {
    marginLeft: 9,
    '& h6': {
      margin: 0,
      color: 'black',
      fontSize: 16,

      fontWeight: 500,
      letterSpacing: 0.5,
      lineHeight: '20px',
    },
    '& span': {
      color: 'black',
      fontSize: 12,

      letterSpacing: 0.38,
      lineHeight: '16px',
    },
  },
}));

export default headerStyles;

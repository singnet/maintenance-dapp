import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const maintenanceStyles = makeStyles((theme: Theme) => ({
  maintenanceMainContainer: {
    maxWidth: '1160px',
    padding: 0,
    margin: '160px auto 0',
    '& > div': {
      width: '100%',
      margin: '0 auto 64px',
      '& > div': { padding: '0 !important' },
    },
    '@media(max-width: 1023px)': { padding: '0 20px' },
    '@media(max-width: 640px)': { margin: '200px auto 0' },
  },
}));

export default maintenanceStyles;

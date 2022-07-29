import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import maintenanceStyles from './styles';
import GradientBox from 'snet-ui/GradientBox';

function Maintenance() {
  const classes = maintenanceStyles();
  return (
    <Container className={classes.maintenanceMainContainer}>
      <GradientBox $background="bgGradient" sx={{ py: '40px', pb: '40px', borderRadius: '8px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/images/error.svg" alt="Maintenance" height="320px" width="340px" />
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'center', py: 3, pb: 3,
        }}
        >
          <Typography align="center" variant="h3" color="#ffff" pb={1.5}>
            We are currently under maintenance and will be back soon!
          </Typography>
        </Box>
      </GradientBox>
    </Container>
  );
}

export default Maintenance;

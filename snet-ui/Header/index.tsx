import NavBar from './NavBar';
import headerStyles from './styles';
import { useMediaQuery } from '@mui/material';
import { AppBar, Toolbar, useTheme } from '@material-ui/core';
import DrawerComponent from './DrawerComponent';
import { navData } from 'utils/Constants';

const Header = () => {
  const classes = headerStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1023));
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <div className={classes.logo}>
          <a href="/" className={classes.logoAnchor}>
            <img src="/images/WhiteLogo.svg" alt="SingularityNET" />
          </a>
        </div>
        {isMobile ? (
          <DrawerComponent
            navigationData={navData}
          />
        ) : (
          <div className={classes.navlinks}>
            <div className={classes.navigationSection}>
              <NavBar navigationData={navData} />
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

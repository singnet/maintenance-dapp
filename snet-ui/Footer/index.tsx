import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import {
  Container, Box, Button, TextField,
} from '@mui/material';
import footerStyles from './styles';
import {
  navData, PrimaryFooterMainLinks, SocialMediaLinks, LegalLinks,
} from 'utils/Constants';

function Footer() {
  const [email, setEmail] = useState('');
  const classes = footerStyles();
  const [copyrightYear] = useState(() => new Date().getFullYear());

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };

  return (
    <Container className={classes.footerMainContainer}>
      <Box className={classes.footerWrapper}>
        <Box className={classes.primaryFooter}>
          <Box className={classes.logoSection}>
            <Box className={classes.logo}>
              <img alt="SingularityNET" src="images/SNETLogo.png" />
              <span>Home of Benevolent AI and AGI</span>
            </Box>
            <Box className={classes.socialIconsNewsletterContainer}>
              <ul>
                {SocialMediaLinks.map((item) => (
                  <li key={item.title}>
                    <a href={item.link} title={item.title} target="_blank" rel="noopener noreferrer">
                      <item.icon />
                    </a>
                  </li>
                ))}
              </ul>
              <Box className={classes.newsLetterContainer}>
                <span>Subscribe to Newsletter</span>
                <Box>
                  <TextField value={email} placeholder="johndoe@gmail.com" onChange={handleEmailChange} fullWidth />
                  <Button>join</Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.footerRightSideLinks}>
            {PrimaryFooterMainLinks.map((item) => (
              <ul key={item.title} className={classes.footerLinksContainer}>
                <span>{item.title}</span>
                {item.children.map((child) => (
                  <li className={classes.footerLinks} key={child.label}>
                    <a
                      href={child.link}
                      title={child.label}
                      target={child.internalLink ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </Box>
        </Box>
        <Grid container className={classes.secondaryFooter}>
          <Grid item sm={12}>
            <span>© {copyrightYear} {navData[0].name}</span>
            <p>
              {LegalLinks.map((child) => (
                <a
                  href={child.link}
                  title={child.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={child.title}
                >
                  {child.title}
                </a>
              ))}
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Footer;

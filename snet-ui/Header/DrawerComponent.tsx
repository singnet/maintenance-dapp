import React, { useState } from 'react';
import { navData } from 'utils/Constants';
import { Drawer } from '@material-ui/core';
import headerStyles from './styles';
import {
  Box, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import MobileHeader from './MobileHeader';

type DrawerComponentProps = {
  navigationData: any;
};

const DrawerComponent = ({
  navigationData,
}: DrawerComponentProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = headerStyles();

  return (
    <>
      <MobileHeader navigationData={navigationData} />
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className={classes.customDrawer}
      >
        <Box role="presentation" sx={{ width: 300 }}>
          <List>
            {navData.map((navItem) => (
              <ListItem onClick={() => setOpenDrawer(false)} key={navItem.id}>
                <ListItemButton
                  component="a"
                  href={navItem.url}
                  title={navItem.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ListItemText primary={navItem.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default DrawerComponent;

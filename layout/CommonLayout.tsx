import React, { PropsWithChildren } from 'react';
import Footer from 'snet-ui/Footer';
import Header from 'snet-ui/Header';
import Box from '@mui/system/Box';
import Falsemessage from 'snet-ui/Falsemessage';

export default function CommonLayout({
  children,
  ...rest
}: PropsWithChildren<Record<never, any>>) {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2,
        }}
      >
        <Falsemessage />
        <Header />
      </Box>
      <Box>{children}</Box>
      <Footer />
    </>
  );
}

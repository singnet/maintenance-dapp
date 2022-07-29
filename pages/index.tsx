import type { NextPage } from 'next';
import nextI18NextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import CommonLayout from 'layout/CommonLayout';
import Maintenance from 'components/Maintenance';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

const Home: NextPage = () => (
  <CommonLayout>
    <Head>
      <title>Maintenance Page Inside</title>
    </Head>
    <Maintenance />
  </CommonLayout>
);

export default Home;

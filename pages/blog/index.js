import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import HomeLink from '../../components/HomeLink';
import Layout from '../../components/utils/Layout';
import MaxWidthWrapper from '../../components/utils/MaxWidthWrapper';
import PageHeader from '../../components/utils/PageHeader';
import Paragraph from '../../components/utils/Paragraph';
import AnchorLink from '../../components/utils/AnchorLink';
import Spacer from '../../components/utils/Spacer';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Blog</title>
        <meta name='description' content='Peter Millspaugh - Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeLink />
      <Layout>
        <MaxWidthWrapper>
          <PageHeader page='Blog' />
          <Paragraph>
            If you find yourself here on my blog placeholder, thanks for digging
            around!
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            I may be writing in the future on topics like Web Accessibility,
            Progressive Web Apps, Service Workers, and who knows what else. In
            the meantime, let me know what you think of the{' '}
            <Link href='/talks/accessibility' passHref>
              <AnchorLink>talk on Accessibility</AnchorLink>
            </Link>{' '}
            I gave over the summer.
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            Or, if you are interested in connecting,{' '}
            <Link href='/about#contact' passHref>
              <AnchorLink>reach out to me on your preferred channel</AnchorLink>
            </Link>
            . Looking forward to hearing from you!
          </Paragraph>
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

export default Blog;

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Peter Millspaugh</title>
        <meta
          name='description'
          content='Peter Millspaugh - Frontend Developer'
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <h1>Home.</h1>
      <div>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href='/work'>
          <a>Work</a>
        </Link>
      </div>
      <div>
        <Link href='/talks'>
          <a>Talks</a>
        </Link>
      </div>
      <div>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </div>
      <div>
        <Link href='#'>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}

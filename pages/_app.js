import { CSSReset } from '../styles/globals';

function App({ Component, pageProps }) {
  return (
    <>
      <CSSReset />
      <Component {...pageProps} />
    </>
  );
}

export default App;

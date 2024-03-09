import Head from "next/head";
import Wishlist from "@/components/Wishlist";

const WishlistPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Wishlist</title>
        <meta
          name="title"
          property="og:title"
          content="Pete's garden wishlist"
        />
      </Head>
      <Wishlist />
    </>
  );
};

export default WishlistPage;

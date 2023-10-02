import Head from "next/head";
import Wishlist from "@/components/Wishlist";

const WishlistPage = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Wishlist</title>
        <meta name="description" content="Peter Millspaugh - Wishlist" />
      </Head>
      <Wishlist />
    </>
  );
};

export default WishlistPage;

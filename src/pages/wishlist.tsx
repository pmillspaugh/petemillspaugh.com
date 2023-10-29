import Head from "next/head";
import Wishlist from "@/components/Wishlist";

const WishlistPage = () => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Wishlist</title>
        <meta name="description" content="Pete Millspaugh - Wishlist" />
      </Head>
      <Wishlist />
    </>
  );
};

export default WishlistPage;

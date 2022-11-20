import Productslist from "components/Products/Productslist";
import Reviews from "components/Reviews/Reviews";
import React from "react";

type Props = {};

const Home = () => {
  return (
    <>
      <Productslist />
      <Reviews/>
    </>
  );
};

export default Home;

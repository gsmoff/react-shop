import React from "react";
import productsArray, {
  getProductsObject,
  Product,
} from "components/Products/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [key: number]: Product;
  };
};

const CartTotal = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
      Total:{" "}
      {Object.keys(productsInCart).reduce(
        (sum, productId) =>
          sum +
          productsObject[parseInt(productId)].price *
            productsInCart[parseInt(productId)],
        0
      )}{" "}
      $
    </div>
  );
};

export default CartTotal;

import { Card, CardContent, Grid, Button } from "@mui/material";
import { Product } from "components/Products/productsArray";
import "./CartProductListItemExtended.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import Guantity from "components/Guantity/Guantity";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { removeLike, addLike } from "redux/likeReducer";
import {
  removeProductFromCart,
  changeProductQuantity,
} from "redux/cartReducer";

type Props = {
  product: Product;
  productCount: number;
};

const CartProductListItemExtended = ({ product, productCount }: Props) => {
  const isLiked = useAppSelector(
    (state) => state.productsLikeState[product.id]
  );

  const dispatsh = useAppDispatch();

  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>
          <div className="product-image">
            <img src={product.image} alt="" />
          </div>
          <Button
            variant="outlined"
            onClick={() =>
              isLiked
                ? dispatsh(removeLike(product.id))
                : dispatsh(addLike(product.id))
            }
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
          <div>{product.name}</div>
          <p>Price for one item: {product.price}</p>
          <p>Count: {productCount}</p>
          <Guantity
            minCount={0}
            count={productCount}
            onDecrementClick={() => {
              productCount === 1
                ? dispatsh(removeProductFromCart(product.id))
                : dispatsh(
                    changeProductQuantity({
                      id: product.id,
                      count: productCount - 1,
                    })
                  );
            }}
            onIncrementClick={() =>
              dispatsh(
                changeProductQuantity({
                  id: product.id,
                  count: productCount + 1,
                })
              )
            }
          />
          <Button
            variant="outlined"
            onClick={() => dispatsh(removeProductFromCart(product.id))}
          >
            <DeleteIcon />
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CartProductListItemExtended;

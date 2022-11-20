import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
// import classes from "../Products/ProductsListItem.module.сіі";
import "../Products/ProductsListItem.scss";
import React, { useState } from "react";
import { green } from "@mui/material/colors";
import Guantity from "components/Guantity/Guantity";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { removeLike, addLike } from "redux/likeReducer";
import {addProductToCart} from 'redux/cartReducer'

type Props = {
  id: number;
  name: string;
  description: string;
  type: string;
  capacity: number;
  price: number;
  image: string;
  addProductToCart?: (id: number, count: number) => void;
  // isLiked?: boolean;
};

const ProductsListItem = ({
  id,
  name,
  description,
  type,
  capacity,
  price,
  image,
}: // isLiked,
Props) => {
  const [count, setCount] = useState<number>(1);

  const [color, setColor] = useState<string>("green");

  const onIncrementClick = () => setCount((prevState: number) => prevState + 1);

  const onDecrementClick = () => setCount((prevState: number) => prevState - 1);

  const changeColor = () =>
    setColor((prevState: string) => (prevState === "green" ? "red" : "green"));

  const isLiked = useAppSelector((state) => state.productsLikeState[id]);

  const dispatsh = useAppDispatch();

  return (
    <Card className="product">
      <CardContent>
        <div className="product-image">
          <img src={image} alt={name} />
        </div>
        <Button
          variant="outlined"
          onClick={() =>
            isLiked
              ? dispatsh(removeLike(id))
              : dispatsh(addLike(id))
          }
        >
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
        <h4>{name}</h4>
        <p className="product-description">{description}</p>
        <div className="product-features">
          <span>Type: </span>
          {type}
        </div>
        <div className="product-features">
          <span>Capacity:</span> {capacity} Gb
        </div>
        <div className="product-price">Price: {price} $</div>

        <div>
          <p>Color:{color}</p>
          <button onClick={changeColor}>Change color</button>
        </div>
        <Guantity
          onDecrementClick={onDecrementClick}
          onIncrementClick={onIncrementClick}
          count={count}
        />
      </CardContent>
      <CardActions className="btn-wrap">
        <Button variant="outlined"
          onClick={() => dispatsh(addProductToCart({id, count}))}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

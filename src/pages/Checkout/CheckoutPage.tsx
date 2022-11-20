import React, { useState } from "react";

import { Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";
import axios from "axios";

type Props = {};

type Order = {
  name: string;
  adress: string;
};

const CheckoutPage = (props: Props) => {
  const [isOrderSend, setIsOrderSend] = useState(false);

  const [orderData, setOrderDate] = useState<Order>({
    name: "",
    adress: "",
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderDate((prevState: Order) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const hendleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderDate((prevState: Order) => ({
      ...prevState,
      adress: e.target.value,
    }));
  };

  const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://my-json-server.typicode.com/kznkv-skillup/server/orders", {
        name: orderData.name,
        adress: orderData.adress,
      })
      //   .then((res) => console.log(res.data));
      .then((res) => res.data)
      .then(({ name, adress }) => {
        setOrderDate({
          name,
          adress,
        });
        setIsOrderSend(true);
      });
  };

  const renderForm = () => {
    return (
      <form onSubmit={orderSend}>
        <div>
          <input
            type="text"
            value={orderData.name}
            onChange={handleName}
            placeholder="Your name"
          />
        </div>
        <div>
          <input
            type="text"
            value={orderData.adress}
            onChange={hendleAdress}
            placeholder="Your adress"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    );
  };

  const renderMessage = () => {
    return (
      <div>
        <div>Dear,{orderData.name}, thanks for your order!</div>
        <p>Adress:{orderData.adress}</p>
      </div>
    );
  };
  // console.log(orderData)
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          margin: "40px 0",
        }}
      >
        Checkout Page
      </Typography>
      {isOrderSend ? renderMessage() : renderForm()}
    </>
  );
};

export default CheckoutPage;

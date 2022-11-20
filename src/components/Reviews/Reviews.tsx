import {
  Card,
  CardContent,
  TextareaAutosize,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";

type Props = {};

type Review = {
  name: string;
  text: string;
};

const Reviews = (props: Props) => {
  const arrReview: Review[] = [
    {
      name: "Ava",
      text: "I am addicted to this chair! It was pretty easy to set up. Make sure you don't accidentally nail the back pillow to the thingy that holds the butt and the back pieces together",
    },
    {
      name: "Stan Woods",
      text: "Chair looks as advertised, assembly took less than 10 min. The only drawback would be the way arm is mounted to the seat. It’s a little weak.",
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(arrReview);

  const [newReview, setNewRewiew] = useState<Review>({ name: "", text: "" });

  const hendleChengeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRewiew((prevState: Review) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const hendleChengeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewRewiew((prevState: Review) => ({
      ...prevState,
      text: e.target.value,
    }));
  };

  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.name === "" || newReview.text === "") {
      alert("all fields are required")
    } else {
      setReviews((prevState: Review[]) => {
        return [...prevState,newReview]
      })
      setNewRewiew({
        name: "",
        text: "",
      })
    }
  }

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          margin: "40px 0",
        }}
      >
        Reviews
      </Typography>
      {reviews.map(({ name, text }: Review, i) => (
        <Card
          sx={{
            margin: "20px 0",
          }}
          key={i}
        >
          <CardContent>
            <div>{name}</div>
            <div>{text}</div>
          </CardContent>
        </Card>
      ))}
      <form onSubmit={onSend}>
        <Typography variant="h5">Please leave a reviews</Typography>
        <div
          style={{
            margin: "15px 0",
          }}
        >
          <TextField
            size="small"
            label="You name"
            value={newReview.name}
            onChange={hendleChengeName}
          ></TextField>
        </div>
        <TextareaAutosize
          minRows={5}
          placeholder="Your message"
          value={newReview.text}
          onChange={hendleChengeText}
        ></TextareaAutosize>
        <div>
          <Button type="submit" variant="contained">Send</Button>
        </div>
      </form>
    </>
  );
};

export default Reviews;

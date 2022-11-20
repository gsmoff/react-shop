import React from "react";
import { Button, TextField } from "@mui/material";

type Props = {
  onDecrementClick?: () => void;
  onIncrementClick?: () => void;
  count: number;
  minCount?: number;
};

const Guantity = ({
  onDecrementClick,
  onIncrementClick,
  count,
  minCount = 1,
}: Props) => {
  return (
    <div className="product-quantity">
      <Button
        variant="contained"
        size="small"
        onClick={onDecrementClick}
        disabled={count <= minCount}
      >
        -
      </Button>
      <TextField size="small" value={count} variant="outlined" />
      <Button
        variant="contained"
        size="small"
        onClick={onIncrementClick}
        disabled={count >= 10}
      >
        +
      </Button>
    </div>
  );
};

export default Guantity;

import React from "react";
import CardContent from "@mui/material/CardContent";
import { Avatar, InputAdornment, OutlinedInput } from "@mui/material";
import { Link } from "react-router-dom";

function Comment(props) {
  const { text, userId, userName } = props;

  return (
    <CardContent>
      <OutlinedInput
        disabled
        id="outlined-adorment-amount"
        multiline
        inputProps={{ maxLength: 25 }}
        fullWidth
        value={text}
        startAdornment={
          <InputAdornment position="start">
            <Link to={{ pathname: "/users/" + userId }}>
              <Avatar aria-label="recipe">
                {userName.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
          </InputAdornment>
        }
      ></OutlinedInput>
    </CardContent>
  );
}

export default Comment;

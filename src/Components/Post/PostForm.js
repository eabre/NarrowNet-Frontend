import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
//import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import "./Post.scss";
import { Link } from "react-router-dom";
import { InputAdornment, OutlinedInput, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function PostForm(props) {
  const { userId, userName, refreshPosts } = props;
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [isSent, setIsSent] = useState(false);

  const savePost = () => {
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        userId: userId,
        text: text,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log("error"));
  };

  const handleSubmit = () => {
    savePost();
    refreshPosts();
    setIsSent(true);
    setTitle("");
    setText("");
  };

  const handleTitle = (value) => {
    setTitle(value);
    setIsSent(false);
  };

  const handleText = (value) => {
    setText(value);
    setIsSent(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSent(false);
  };

  return (
    <div className="postContainer">
      <Snackbar open={isSent} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your post has been sent successfully
        </Alert>
      </Snackbar>
      <Card
        sx={{
          width: "800px",
          borderRadius: "20px",
          background: "linear-gradient(20deg, orange 30%, aqua 90%)",
        }}
      >
        <CardHeader
          avatar={
            <Link
              className="linkContainer"
              to={{ pathname: "/users/" + userId }}
            >
              <Avatar className="user-grad" aria-label="recipe">
                {userName.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
          }
          title={
            <OutlinedInput
              color="warning"
              id="outlined-adorment-amount"
              multiline
              placeholder="Enter a title"
              inputProps={{ maxLength: 25 }}
              fullWidth
              value={title}
              onChange={(i) => handleTitle(i.target.value)}
            ></OutlinedInput>
          }
        />
        {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
        <CardContent>
          <Typography variant="body2" color="white" textAlign={"left"}>
            <OutlinedInput
              variant="outlined"
              color="warning"
              id="outlined-adorment-amount"
              multiline
              placeholder="Enter a text"
              inputProps={{ maxLength: 250 }}
              fullWidth
              value={text}
              onChange={(i) => handleText(i.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleSubmit}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostForm;

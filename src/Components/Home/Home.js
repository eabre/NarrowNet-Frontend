import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./Home.scss";
import { Container, Grid } from "@mui/material";
import PostForm from "../Post/PostForm";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  const refreshPosts = () => {
    fetch("/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    refreshPosts();
  }, [postList]);

  if (error) {
    return <div>Error !!!</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2} marginTop="30px">
      <Grid item xs={0} md={3} lg={3}></Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Container className="postContainer">
          <PostForm
            userId={1}
            userName={"post.userName"}
            refreshPosts={refreshPosts}
          />
          {postList.map((post) => (
            <Post
              userId={post.userId}
              postId={post.id}
              userName={post.userName}
              title={post.title}
              text={post.text}
            />
          ))}
        </Container>
      </Grid>
      <Grid item xs={0} md={3} lg={3}></Grid>
    </Grid>
  );
}

export default Home;

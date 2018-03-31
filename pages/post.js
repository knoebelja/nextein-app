import React from "react";
import withPost, { Content } from "nextein/post";

export default withPost(({ post }) => (
  <div>
    <Header />
    <h1>{post.data.title}</h1>
    <Content {...post} />
  </div>
));

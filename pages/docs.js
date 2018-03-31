import styled from "styled-components";
import withPost, { Content } from "nextein/post";
import { withPostsFilterBy, inCategory } from "nextein/posts";

import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";

const withDocs = withPostsFilterBy(
  // filters posts to only include posts in the docs folder
  inCategory("docs", { includeSubCategories: true })
);

const docs = withPost(
  withDocs(({ post: current, posts }) => {
    const post = current || posts[0];
    return (
      <div>
        <Menu />
        <Sidebar posts={posts} />
        <Body>
          <Title>{post.data.title}</Title>
          <Content {...post} />
        </Body>
      </div>
    );
  })
);

const Title = styled.h1`
  font-size: 2em;
  color: tomato;
  border: 2px dotted tomato;
`;

const Body = styled.div``;

export default docs;

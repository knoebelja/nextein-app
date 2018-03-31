import Link from "nextein/link";

const Menu = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.data.url}>
        <Link {...post}>
          <a>{post.data.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Menu;

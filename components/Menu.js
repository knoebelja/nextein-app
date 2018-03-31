import Link from "next/link";

const Menu = () => (
  <ul>
    <li>
      <Link href="/">
        <a>HOME</a>
      </Link>
    </li>
    <li>
      <Link href="/docs">
        <a>DOCS</a>
      </Link>
    </li>
    <li>
      <Link href="/blog">
        <a>BLOG</a>
      </Link>
    </li>
  </ul>
);

export default Menu;

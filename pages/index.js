import Link from "next/link";
import Head from "next/head";

const index = () => {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <nav>
      <ul className="menu-bar">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/help">
          <a>Help</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </ul>
    </nav>
      <h1>Hello World !</h1>
    </>
  )
}

export default index;
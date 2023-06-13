import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const PageContainer = ({ children }) => {
  const obj = useContext(DataContext);

  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/posts">Posts</a>
        <a href="/windows">Windows</a>
        <p>I'm {obj.name}</p>
      </nav>

      <main>{children}</main>

      <footer>
        <p>I'm {obj.name}</p>
        <p>Made with ❤️</p>
      </footer>
    </>
  );
};

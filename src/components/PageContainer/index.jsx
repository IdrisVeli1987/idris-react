export const PageContainer = ({ children }) => {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/posts">Posts</a>
        <a href="/windows">Windows</a>
      </nav>

      <main>{children}</main>

      <footer>
        <p>Made with ❤️</p>
      </footer>
    </>
  );
};

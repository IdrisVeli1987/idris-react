import { Route, Routes } from "react-router";
import { About } from "../page/About";
import Users from "../page/Users";
import { Home } from "../page/Home";
import { Contact } from "../page/Contact";
import { Posts } from "../page/Posts";
import { Windows } from "../components/Windows";
import { LearnMUI } from "../page/LearnMUI";

export const WebRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/windows" element={<Windows />} />
      <Route path="/learn-mui" element={<LearnMUI />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<p>Not found 404!</p>} />
    </Routes>
  );
};

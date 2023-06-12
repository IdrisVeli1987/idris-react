import { Route, Routes } from "react-router";
import { About } from "../page/About";
import Users from "../page/Users";

export const WebRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<div>Salam contact page</div>} />
    </Routes>
  );
};

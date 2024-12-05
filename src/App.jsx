import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Index.js";
import Core from "./pages/Core.jsx";
import Error from "./pages/Error.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Core />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default App;

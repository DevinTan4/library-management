import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;

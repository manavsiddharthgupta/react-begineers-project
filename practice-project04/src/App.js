import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  const cntxsa = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!cntxsa.islogIn && <Login />}
        {cntxsa.islogIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";
import Home from "./home";
import Profile from "./profile";
import About from "./about";
import Navbar from "./navbar";
import Protected from "./protected";
import routes from "./routes";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  const logIn = useCallback(() => {
    setisLoggedIn(true);
  }, [isLoggedIn]);

  const logOut = useCallback(() => {
    setisLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <Router>
      <Navbar />
      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        {routes.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <route.element />
              </Protected>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}
export default App;

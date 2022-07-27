import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";
import Home from "./home";
import Profile from "./profile";
import About from "./about";
import Navbar from "./navbar";
import Protected from "./protected";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = useCallback(() => {
    console.log("App Called 1");
    setisLoggedIn(true);
  }, [isLoggedIn]);
  console.log("App Called 1");

  const logOut = useCallback(() => {
    console.log("App Called 2");
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
        <Route
          path="/profile"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          }
        />
        <Route
          path="/about"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <About />
            </Protected>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;

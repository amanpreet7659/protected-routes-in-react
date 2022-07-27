import About from "./about";
import Home from "./home";
import Profile from "./profile";

const route = (path, element, exact = true) => {
  return { path, element, exact };
};

const routes = [
  route("/", Home),
  route("/profile", Profile),
  route("/about", About),
];

export default routes;

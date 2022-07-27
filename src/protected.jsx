import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    console.log("Not loggedin");
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;

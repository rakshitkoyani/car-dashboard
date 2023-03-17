import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Register from "./pages/Register";
<<<<<<< HEAD
import Registration from "./pages/Registration";
=======
>>>>>>> origin
import Login from "./pages/Login";
import Appraisals from "./pages/Appraisals";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/appraisals":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Register />} />
<<<<<<< HEAD
      <Route path="/" element={<Registration />} />
=======
>>>>>>> origin
      <Route path="/login" element={<Login />} />
      <Route path="/appraisals" element={<Appraisals />} />
    </Routes>
  );
}
export default App;

import Posts from "../../pages/posts/posts";
import User from "../../pages/user/user";
import About from "../../pages/about/about";
import Header from "../header/header";
import { Routes, Route } from "react-router-dom";
import { PATH_HOME, PATH_ABOUT, PATH_USER } from "../../utils/constans";
import { useEffect, useState } from "react";
import { getPosts } from "../../utils/api";

const App = () => {
  const [isPreloader, setIsPreloader] = useState(false);

  useEffect(() => {
    setIsPreloader(true)
    const timer = setTimeout(() => {
      getPosts().then((res) => {
        setIsPreloader(false)
        console.log(res);
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path={PATH_HOME}
          element={<Posts isPreloader={isPreloader}/>}
        />
        <Route path={PATH_ABOUT} element={<About />} />
        <Route path={PATH_USER} element={<User />} />
      </Routes>
    </>
  );
};

export default App;

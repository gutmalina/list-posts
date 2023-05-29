import Posts from "../../pages/posts/posts";
import User from "../../pages/user/user";
import About from "../../pages/about/about";
import Header from "../header/header";
import { Routes, Route } from "react-router-dom";
import { PATH_HOME, PATH_ABOUT, PATH_USER_ID } from "../../utils/constans";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestPostsAction } from "../../services/actions/action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPostsAction());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path={PATH_HOME} element={<Posts />} />
        <Route path={PATH_ABOUT} element={<About />} />
        <Route path={PATH_USER_ID} element={<User />} />
      </Routes>
    </>
  );
};

export default App;

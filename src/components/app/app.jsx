import Posts from "../../pages/posts/posts";
import User from "../../pages/user/user";
import About from "../../pages/about/about";
import Header from "../header/header";
import { Routes, Route } from "react-router-dom";
import { PATH_HOME, PATH_ABOUT, PATH_USER } from "../../utils/constans";
import { useEffect, useState } from "react";
import { getPosts } from "../../utils/api";
import { useDispatch } from "react-redux";
import { testAction } from "../../services/actions/actions";

const App = () => {
  const [isPreloader, setIsPreloader] = useState(false);
  const [listPosts, setListPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsPreloader(true)
    dispatch(testAction())
    const timer = setTimeout(() => {
      getPosts().then((res) => {
        if(res.status === 200){
          setIsPreloader(false)
          setListPosts(res.data)
        }
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
          element={<Posts isPreloader={isPreloader} listPosts={listPosts}/>}
        />
        <Route path={PATH_ABOUT} element={<About />} />
        <Route path={PATH_USER} element={<User />} />
      </Routes>
    </>
  );
};

export default App;

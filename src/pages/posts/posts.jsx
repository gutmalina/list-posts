import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Preloader from "../../components/preloader/preloader";
import { useSelector } from "react-redux";
import RenderCard from "../../components/render-card/render-card";
import { TYPE_CARD_POST } from "../../utils/constans";
import { useEffect, useState } from "react";
import Paging from "../../components/paging/paging";
import { PLACEHOLDER_FILTER_TITLE, TEXT_BTN_SORTING } from "../../utils/constans";

const Posts = () => {
  const isPreloader = useSelector((store) => store.isPreloader);
  const posts = useSelector((store) => store.posts);
  const [sortPosts, setSortPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);
  const [value, setValue] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [numberPostsPerPage] = useState(5);
  const lastIndexPage = activePage * numberPostsPerPage;
  const firstIndexPage = lastIndexPage - numberPostsPerPage;
  const allPage = [];

  useEffect(() => {
    posts && setSortPosts(posts);
  }, [posts]);

  const handleSortPosts = (key) => {
    const arrNew = [...posts].sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    setSortPosts(arrNew);
  };

  const getValue = (e) => {
    const { value } = e.target;
    setValue((prevState) => ([...prevState], value));
  };

  useEffect(() => {
    const arr = sortPosts.filter((post) => {
      if (value) {
        return post.title.includes(value);
      } else {
        return post;
      }
    });
    setFilterPosts(arr);
  }, [value, sortPosts]);

  const renderPosts = () => {
    if (filterPosts) {
      return filterPosts.slice(firstIndexPage, lastIndexPage);
    } else {
      return sortPosts.slice(firstIndexPage, lastIndexPage);
    }
  };

  const totalAllPosts = () => {
    if (filterPosts) {
      return filterPosts.length;
    } else {
      return sortPosts.length;
    }
  };

  for (let i = 1; i <= Math.ceil(totalAllPosts() / numberPostsPerPage); i++) {
    allPage.push(i);
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder={PLACEHOLDER_FILTER_TITLE}
            value={value}
            onChange={getValue}
          />
        </Form.Group>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {TEXT_BTN_SORTING}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => handleSortPosts("title")}
            >
              Sort alphabetically
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() => handleSortPosts("id")}
            >
              Sort by creation date
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form>
      <Container>
        {posts && (
          <RenderCard arrayCards={renderPosts()} type={TYPE_CARD_POST} />
        )}
      </Container>
      <Paging
        allPage={allPage}
        setActivePage={setActivePage}
        activePage={activePage}
      />
    </>
  );
};

export default Posts;

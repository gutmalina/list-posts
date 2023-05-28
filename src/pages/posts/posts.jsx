import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Preloader from "../../components/preloader/preloader";
import { useSelector } from "react-redux";
import RenderCard from "../../components/render-card/render-card";
import { TYPE_CARD_POST } from "../../utils/constans";
import { useCallback, useEffect, useState } from "react";

const Posts = () => {
  const isPreloader = useSelector((store) => store.isPreloader);
  const posts = useSelector((store) => store.posts);
  const [renderPosts, setRenderPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    posts && setRenderPosts(posts);
  }, [posts]);

  const sortPosts = (key) => {
    const arrNew = [...posts].sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    setRenderPosts(arrNew);
  };

  const getValue = (e) => {
    const { value } = e.target;
    setValue((prevState) => ([...prevState], value));
  };

  useEffect(() => {
    const arr = renderPosts.filter((post) => {
      if (value) {
        return post.title.startsWith(value);
      } else {
        return post;
      }
    });
    setFilterPosts(arr);
  }, [value, renderPosts]);

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Поиск по заголовку"
            value={value}
            onChange={getValue}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Сортировка
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={() => sortPosts("title")}>
              Sort alphabetically
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => sortPosts("id")}>
              Sort by creation date
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form>
      <Container>
        {renderPosts && filterPosts ? (
          <RenderCard arrayCards={filterPosts} type={TYPE_CARD_POST} />
        ) : (
          <RenderCard arrayCards={renderPosts} type={TYPE_CARD_POST} />
        )}
      </Container>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};

export default Posts;

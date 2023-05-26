import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Preloader from "../../components/preloader/preloader";
import Post from "../../components/post/post";
import { useSelector } from "react-redux";

const Posts = () => {
  const isPreloader = useSelector(store=> store.isPreloader);
  const listPosts = useSelector(store=> store.posts);

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Поиск по заголовку" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Сортировка
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">По алфавиту</Dropdown.Item>
            <Dropdown.Item href="#/action-2">По дате создания</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form>
      <Container>
        {isPreloader ? (
          <Preloader />
        ) : (
          listPosts.map((post) => <Post key={post.id} />)
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

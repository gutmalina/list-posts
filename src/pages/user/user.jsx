import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import avatar from "../../images/avatar.svg";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { REQUESTED_USER } from "../../services/sagas/sagas";
import { useNavigate, useParams } from "react-router";
import RenderPosts from "../../components/render-posts/render-posts";

const User = () => {
  const user = useSelector((store) => store.user);
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const router = useParams();
  const id = router.id.slice(1);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    dispatch({
      type: REQUESTED_USER,
      payload: {
        userId: id,
      },
    });
  }, []);

  const listPostsUser = useMemo(() => {
    if (id && posts) {
      return posts.filter((post) => post.userId === +id);
    }
  }, [id, posts]);

  return (
    <>
      {user && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{user.email}</ListGroup.Item>
            {user.address && <ListGroup.Item>{user.address.city}</ListGroup.Item>}
          </ListGroup>
          <Button variant="primary" onClick={goBack}>Назад</Button>
        </Card>
      )}
      <Container>
        {listPostsUser && <RenderPosts listPosts={listPostsUser} />}
      </Container>
    </>
  );
};

export default User;

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import avatar from "../../images/avatar.svg";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import RenderCard from "../../components/render-card/render-card";
import { TYPE_CARD_USER, TEXT_BTN_GO_BACK } from "../../utils/constans";
import { requestUserAction } from "../../services/actions/action";

const User = () => {
  const user = useSelector((store) => store.user);
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const router = useParams();
  const id = router.id.slice(1);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(requestUserAction(id));
  }, []);

  const listPostsUser = useMemo(() => {
    if (id && posts) {
      return posts.filter((post) => post.userId === +id);
    }
  }, [id, posts]);

  return (
    <>
      <Stack className="p-3">
        {user && (
          <Stack direction="horizontal" gap={2} className="mx-auto mb-4">
            <Card.Img
              variant="top"
              src={avatar}
              style={{ maxWidth: 200, maxHeight: 250 }}
            />
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{user.email}</ListGroup.Item>
                {user.address && (
                  <ListGroup.Item>{user.address.city}</ListGroup.Item>
                )}
              </ListGroup>
              <Button variant="primary" onClick={goBack}>
                {TEXT_BTN_GO_BACK}
              </Button>
            </Card>
          </Stack>
        )}
        <Container>
          {listPostsUser && (
            <RenderCard arrayCards={listPostsUser} type={TYPE_CARD_USER} />
          )}
        </Container>
      </Stack>
    </>
  );
};

export default User;

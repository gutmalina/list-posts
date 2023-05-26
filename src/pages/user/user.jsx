import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import avatar from '../../images/avatar.svg';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { REQUESTED_USER } from "../../services/sagas/sagas";
import { useParams } from "react-router";

const User = () => {
  const user = useSelector(store=> store.user)
  const dispatch = useDispatch();
  const router = useParams();
  const id = router.id.slice(1);

  useEffect(()=>{
    dispatch({
      type: REQUESTED_USER,
      payload: {
        userId: id,
      },
    });
  }, [])

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{user.email}</ListGroup.Item>
          <ListGroup.Item>{user.address.city}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Назад</Button>
      </Card>
      <Container>Здесь будут отрисовываться все посты пользователя</Container></>
  )
};

export default User;

import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import avatar from '../../images/avatar.svg';
import Button from 'react-bootstrap/Button';

const User = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>Имя пользователя</Card.Title>
          <Card.Text>Любой текст</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Email</ListGroup.Item>
          <ListGroup.Item>City</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Назад</Button>
      </Card>
      <Container>Здесь будут отрисовываться все посты пользователя</Container></>
  )
};

export default User;

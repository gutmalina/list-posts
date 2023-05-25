import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import avatar from '../../images/avatar.svg';
import Image from 'react-bootstrap/Image'

const Post = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Загаловок поста</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">
            <Image src={avatar}/>
          </Card.Link>
          <Button variant="outline-primary">Primary</Button>{' '}
        </Card.Body>
      </Card>
    </>
  )
};

export default Post;

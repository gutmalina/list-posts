import Card from "react-bootstrap/Card";

const Comment = ({ comment }) => {
  return (
    <>
      {comment && (
        <Card>
          <Card.Body>
            <Card.Title>{comment.email}</Card.Title>
            <Card.Text>{comment.body}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Comment;

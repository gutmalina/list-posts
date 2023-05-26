import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import avatar from "../../images/avatar.svg";
import Image from "react-bootstrap/Image";
import { PATH_USER } from "../../utils/constans";
import { Link } from "react-router-dom";
import { REQUESTED_COMMENTS } from "../../services/sagas/sagas";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [idPost, setIdPost] = useState()

useEffect(()=>{
  if(idPost){
    dispatch({
      type: REQUESTED_COMMENTS,
      payload: {
        postId: idPost,
      },
    });
  }

}, [idPost])

  return (
    <>
      <Card>
        <Link to={`${PATH_USER}${post.userId}`}>
          <Card.Header as="h5">
            <Image src={avatar} width={50} height={50} />
          </Card.Header>
        </Link>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary" onClick={()=>setIdPost(post.id)}>Comments</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;

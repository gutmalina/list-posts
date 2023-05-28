import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import avatar from "../../images/avatar.svg";
import Image from "react-bootstrap/Image";
import {
  PATH_USER,
  TEXT_BTN_HIDE_COMMENTS,
  TEXT_BTN_SHOW_COMMENTS,
  TYPE_CARD_COMMENT,
  TYPE_CARD_POST,
} from "../../utils/constans";
import { Link } from "react-router-dom";
import {
  DELETE_COMMENTS,
  REQUESTED_COMMENTS,
} from "../../services/sagas/sagas";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import RenderCard from "../render-card/render-card";

const Post = ({ post, type }) => {
  const comments = useSelector((store) => store.comments);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [textBtn, setTextBtn] = useState(TEXT_BTN_SHOW_COMMENTS);
  const title = post.title[0].toLocaleUpperCase() + post.title.slice(1)
  const body = post.body[0].toLocaleUpperCase() + post.body.slice(1)
  const arrayComments = useMemo(() => {
    return comments.filter((comment) => comment.postId === post.id);
  }, [comments, post.id]);

  useEffect(() => {
    if (showComments) {
      dispatch({
        type: REQUESTED_COMMENTS,
        payload: {
          postId: post.id,
        },
      });
    }
  }, [showComments]);

  const toggleShowComments = () => {
    if (showComments) {
      setShowComments(false);
      setTextBtn(TEXT_BTN_SHOW_COMMENTS);
      dispatch({
        type: DELETE_COMMENTS,
        payload: {
          postId: post.id,
        },
      });
    } else {
      setShowComments(true);
      setTextBtn(TEXT_BTN_HIDE_COMMENTS);
    }
  };

  return (
    <>
      <Card className="mb-3" style={{border: '1px solid #0d6efd'}}>
        {type === `${TYPE_CARD_POST}` && (
          <Link to={`${PATH_USER}${post.userId}`}>
            <Card.Header as="h5">
              <Image src={avatar} width={50} height={50} />
            </Card.Header>
          </Link>
        )}
        <Card.Body>
          <Card.Title className="mb-3">{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button variant="primary" onClick={toggleShowComments}>
            {textBtn}
          </Button>
          {showComments && comments && (
            <RenderCard arrayCards={arrayComments} type={TYPE_CARD_COMMENT} />
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;

import Post from "../post/post";
import Comment from "../comment/comment";
import { TYPE_CARD_COMMENT } from "../../utils/constans";

const RenderCard = ({ arrayCards, type }) => {
  return (
    <>
      {type === `${TYPE_CARD_COMMENT}`
        ? arrayCards.map((card) => <Comment key={card.id} comment={card} />)
        : arrayCards.map((card) => (
            <Post key={card.id} post={card} type={type} />
          ))}
    </>
  );
};

export default RenderCard;

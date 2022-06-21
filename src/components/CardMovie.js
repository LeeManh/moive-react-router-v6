import { useNavigate } from "react-router-dom";
import { Card } from "antd";

const { Meta } = Card;

const CardMoive = ({ moive }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${moive.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      hoverable
      style={{
        flex: "1",
      }}
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500/${moive.backdrop_path}`}
        />
      }
    >
      <Meta title={moive.original_title} />
    </Card>
  );
};

export default CardMoive;

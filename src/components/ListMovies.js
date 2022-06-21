import { Col, Row } from "antd";
import CardMoive from "./CardMovie";

const ListMovies = ({ moives }) => {
  return (
    <Row gutter={[16, 16]} style={{ padding: "16px" }}>
      {moives &&
        moives.map((moive) => (
          <Col xs={24} sm={12} md={6} key={moive.id}>
            <CardMoive moive={moive} />
          </Col>
        ))}
    </Row>
  );
};

export default ListMovies;

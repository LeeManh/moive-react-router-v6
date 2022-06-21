import { useParams } from "react-router-dom";
import { Row, Col, Skeleton } from "antd";
import _ from "lodash";
import { useState, useEffect } from "react";

import moiveApi from "../apis/moiveApi";

const DetailPage = () => {
  const params = useParams();

  const { id } = useParams();

  //state
  const [moive, setMoive] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  //fetch data
  useEffect(() => {
    const controller = new AbortController();

    const fechMovices = async () => {
      try {
        const params = { signal: controller.signal };
        const response = await moiveApi.getDetails(id);

        console.log(response);
        setMoive(response);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fechMovices();

    return () => controller.abort();
  }, [id]);

  return (
    <div>
      {loading && <Skeleton />}
      {!loading && error && <div>Error</div>}
      {!loading && !_.isEmpty(moive) && (
        <Row gutter={[0, 24]}>
          <Col xs={24} md={12}>
            <img
              src={`https://image.tmdb.org/t/p/original/${moive.backdrop_path}`}
              alt="img"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col xs={24} md={12}>
            <article style={{ padding: "0 16px" }}>
              <h1>{moive.original_title}</h1>
              <p>Over view : {moive.overview}</p>
              <p>Time: {moive.runtime} minutes</p>
            </article>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default DetailPage;

import { useMemo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Skeleton } from "antd";

import ListMovies from "../components/ListMovies";
import PaginationComponent from "../components/Pagination";

import moiveApi from "../apis/moiveApi";

const UpComingPage = () => {
  const { search } = useLocation();

  const page = useMemo(() => {
    return new URLSearchParams(search).get("page") || 1;
  }, [search]);

  //state
  const [moives, setMoives] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(1);

  //fetch data
  useEffect(() => {
    const controller = new AbortController();

    const fechMovices = async () => {
      try {
        const params = { signal: controller.signal, page };
        const response = await moiveApi.getListMovies("upcoming", params);
        console.log(response);
        setMoives(response.results);
        setTotalPage(response.total_pages);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fechMovices();

    return () => controller.abort();
  }, [page]);

  return (
    <div>
      {loading && <Skeleton />}
      {!loading && error && <div>{error}</div>}
      {!loading && !error && moives.length > 0 && (
        <>
          <ListMovies moives={moives} />
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <PaginationComponent page={page} totalPage={totalPage} />
          </div>
        </>
      )}
    </div>
  );
};

export default UpComingPage;

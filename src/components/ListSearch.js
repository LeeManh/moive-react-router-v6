import { useState, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Skeleton } from "antd";

import ListMovies from "../components/ListMovies";

import moiveApi from "../apis/moiveApi";
import PaginationComponent from "./Pagination";

const ListSearch = () => {
  const { name } = useParams();
  const { search } = useLocation();

  const page = useMemo(() => {
    return new URLSearchParams(search).get("page") || 1;
  }, [search]);

  const [moives, setMoives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const controller = new AbortController();

    const fechMovices = async () => {
      try {
        const params = { signal: controller.signal, query: name, page };
        const response = await moiveApi.searchMoive(params);

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
  }, [name, page]);

  console.log(totalPage);
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

export default ListSearch;

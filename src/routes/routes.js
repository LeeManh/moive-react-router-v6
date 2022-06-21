import { Routes, Route } from "react-router-dom";

import PopularPage from "../pages/Popular";
import DetailPage from "../pages/Detail";
import UpComingPage from "../pages/UpComing";
import SearchPage from "../pages/Search";
import ErrorPage from "../pages/Error";
import ListSearch from "../components/ListSearch";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<PopularPage />} />
      <Route path="/up-coming" element={<UpComingPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/search" element={<SearchPage />}>
        <Route path=":name" element={<ListSearch />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesComponent;

import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const PaginationComponent = ({ page, totalPage }) => {
  const navigate = useNavigate();
  const onChange = (value) => {
    navigate(`?page=${value}`);
  };

  console.log(totalPage);
  return (
    <Pagination
      showSizeChanger={false}
      defaultCurrent={page}
      total={totalPage}
      onChange={onChange}
    />
  );
};

export default PaginationComponent;

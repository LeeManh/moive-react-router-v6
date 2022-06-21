import { Input } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

const { Search } = Input;

const BoxInput = styled.div`
  max-width: 500px;
  width: 90%;
  margin: 0 auto 16px;
`;

const SearchPage = () => {
  const navigate = useNavigate();

  const handleSearch = (value) => {
    if (value === "") return;
    navigate(`${value}`);
  };

  return (
    <div>
      <BoxInput>
        <Search
          placeholder="Enter moive to find ..."
          loading={false}
          onSearch={handleSearch}
        />
      </BoxInput>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SearchPage;

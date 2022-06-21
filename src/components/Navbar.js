import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = () => {
  const items = [
    { label: <Link to="/">Popular</Link>, key: "popular" },
    { label: <Link to="/up-coming">Up coming</Link>, key: "up-coming" },
    { label: <Link to="/search">Search</Link>, key: "search" },
  ];

  return (
    <Menu
      items={items}
      mode="horizontal"
      theme="dark"
      style={{ marginBottom: "10px" }}
    />
  );
};

export default Navbar;

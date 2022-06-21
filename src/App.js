// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

import Navbar from "./components/Navbar";
import RoutesComponent from "./routes/routes";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <RoutesComponent />
    </div>
  );
};

export default App;

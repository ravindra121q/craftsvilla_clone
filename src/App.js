import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Component/Navbar";
import AllRoutes from "./Component/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

import NavBar from "./routes/navbar/navbar-component";
import { Route, Routes} from "react-router-dom";
import Home from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Authorization from "./routes/authorization/authorization-component";



const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authorization />} />
          <Route path="logout" element={<Home />} />
        </Route>
        <Route path="/products/hats" element={<Home/>} />
        <Route path="/products/jackets" element={<Home/>} />
        <Route path="/products/sneakers" element={<Home/>} />
        <Route path="/products/womens" element={<Home/>} />
        <Route path="/products/hats" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

import NavBar from "./routes/navbar/navbar-component";
import { Route, Routes} from "react-router-dom";
import Home from "./routes/home/home-component";
import Shop from "./routes/shop/shop-component";
import Authorization from "./routes/authorization/authorization-component";
import Checkout from "./routes/checkout/checkout-component";
import {useEffect} from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase-utils";
import { setCurrentUser, signInSucess, signInFailed } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { setCurrentUserAsync } from "./store/user/user.saga";





const App = () => {

    const dispatch = useDispatch();


  useEffect(() => {

    getCurrentUser().then((user) => {
      console.log(user);
      dispatch(signInSucess(user));
    }).catch((error) =>{
      dispatch(signInFailed(error))
    })

    // const unsubscribe = onAuthStateChangedListener((user) => {
    //     if(user) {
    //         createUserDocumentFromAuth(user);
    //     }
    //     dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
    }, [])

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authorization />} />
          <Route path="logout" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

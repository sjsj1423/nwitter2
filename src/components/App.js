import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(user);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[]);

    return ( 
    <>
     {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing..."}
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer> 
    </>
    );
}

export default App;
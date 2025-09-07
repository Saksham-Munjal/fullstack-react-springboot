import Footer from "./components/footer/Footer.jsx";
import Header from "./components/HeaderComponent.jsx";
import React from "react";
import Home from "./components/Home.jsx";

function App() {  
    return(
        <React.Fragment>
       <Header  />
        <Home />
        <Footer /> 
        </React.Fragment>
    );
}

export default App

import React from "react";
import "./Styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
import HomeGuest from "./Components/Screens/HomeGuest";
import Footer from "./Components/Footer";
import MusicScreen from "./Components/Screens/MusicScreen";
import TVScreen from "./Components/Screens/TVScreen";
import CollectorScreen from "./Components/Screens/CollectorScreen";
import ClothingScreen from "./Components/Screens/ClothingScreen";

function App() {
  const [data, setData] = React.useState(null);

  //use useEffect to get data from API
  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomeGuest />
        </Route>

        <Route path="/Music">
          <MusicScreen />
        </Route>

        <Route path="/TVshows">
          <TVScreen />
        </Route>

        <Route path="/Collectors">
          <CollectorScreen />
        </Route>

        <Route path="/Clothing">
          <ClothingScreen />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

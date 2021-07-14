import React from "react";
import "./App.css";

// Components
import Header from "./Components/Header";
import HomeGuest from "./Components/HomeGuest";
import Footer from "./Components/Footer";

function App() {
  const [data, setData] = React.useState(null);

  //use useEffect to get data from API
  React.useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Header />
      <HomeGuest />
      <Footer />
    </div>
  );
}

export default App;

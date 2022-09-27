import {React, useEffect, useState} from "react";
import  FormListing  from "./FormListing";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listings, setListings] = useState([])
  // const [card, setCard] = useState([])

    useEffect(() =>{
      fetch(" http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data)
      });

    },[])

    const newListing =(card) =>{
      setListings([...listings, card])
    }
    return (
      <div className="app">
        <Header />
        <ListingsContainer  listings={listings}/>
        <FormListing  newListing={newListing}/>
      </div>
    );
}

export default App;

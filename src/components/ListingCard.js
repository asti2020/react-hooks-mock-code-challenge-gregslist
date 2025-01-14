import {React, useState}from "react";

function ListingCard({listing}) {
  const[favorite, setFavorite] = useState(false)

  function toggleFavorite() {
    setFavorite(!favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={toggleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button id={listing.id} onClick={() =>console.log("Remove")} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

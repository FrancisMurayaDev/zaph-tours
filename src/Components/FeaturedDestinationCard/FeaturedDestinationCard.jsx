import "./FeaturedDestinationCard.css";
import React from "react";

function FeaturedDestinationCard() {
  return (
    <div className="destination-container">
      <Destination
        imgSource="../../src/assets/mt-kenya.jpg"
        description={
          "Mt. Kenya offers a stunning and diverse landscape with glacier-capped peaks, lush rainforests, unique alpine ecosystems, and a variety of wildlife."
        }
        price={"ksh.7900"}
      />

      <Destination
        imgSource={"../../src/assets/mt-ruwenzori.jpg"}
        description={
          "Mount Rwenzori has dramatic scenery, diverse wildlife, and rich biodiversity. "
        }
        price={"ksh.9900"}
      />

      <Destination
        imgSource={"../../src/assets/lake-nakuru.jpg"}
        description={
          "Lake Nakuru has diverse wildlife, including flamingos, rhinos, and giraffes. The park is also a great destination for birdwatchers. "
        }
        price={"ksh. 15,000"}
      />

      <Destination
        imgSource={"../../src/assets/tsavo.jpg"}
        description={
          "Tsavo provides the perfect safari destination if you're looking for a unique, authentic experience far from the overcrowded, more popular parks like the Masai Mara and Amboseli which is close"
        }
        price={"ksh. 19,870"}
      />

      <Destination
        imgSource={"../../src/assets/coastal-kenya.jpg"}
        description={
          "Stunning white sand beaches, pristine marine reserves with excellent diving opportunities, rich Swahili culture, historical sites like Fort Jesus in Mombasa, and diverse wildlife viewing experiences along the coastline"
        }
        price={"ksh. 20,000"}
      />

      <Destination
        imgSource={"../../src/assets/nairobi-park.jpg"}
        description={
          " great game viewing experience awaits wildlife lovers against the city backdrop. Common animal species include – Giraffe, leopard, zebra, buffalo, antelope, lion, black and white rhino, hippo, and crocodile."
        }
        price={"ksh. 13, 560"}
      />
    </div>
  );
}

function Destination({ imgSource, description, price }) {
  return (
    <div className="destination-card-container">
      <img
        className="destination-img"
        src={imgSource}
        alt="Features Destination"
      />
      <p className="description">{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default FeaturedDestinationCard;

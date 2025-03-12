import "./FeaturedDestinationCard.css";
import React from "react";
import MtKenya from "../../assets/mt-kenya.jpg";
import MtRwenzori from "../../assets/mt-ruwenzori.jpg";
import LakeNakuru from "../../assets/lake-nakuru.jpg";
import Tsavo from "../../assets/tsavo.jpg";
import Coastal from "../../assets/coastal-kenya.jpg";
import NairobiPark from "../../assets/nairobi-park.jpg";

function FeaturedDestinationCard() {
  return (
    <div className="destination-container">
      <Destination
        imgSource={MtKenya}
        description={
          "Mt. Kenya offers a stunning and diverse landscape with glacier-capped peaks, lush rainforests, unique alpine ecosystems, and a variety of wildlife."
        }
        price={"ksh.7900"}
      />

      <Destination
        imgSource={MtRwenzori}
        description={
          "Mount Rwenzori has dramatic scenery, diverse wildlife, and rich biodiversity. "
        }
        price={"ksh.9900"}
      />

      <Destination
        imgSource={LakeNakuru}
        description={
          "Lake Nakuru has diverse wildlife, including flamingos, rhinos, and giraffes. The park is also a great destination for birdwatchers. "
        }
        price={"ksh. 15,000"}
      />

      <Destination
        imgSource={Tsavo}
        description={
          "Tsavo provides the perfect safari destination if you're looking for a unique, authentic experience far from the overcrowded, more popular parks like the Masai Mara and Amboseli which is close"
        }
        price={"ksh. 19,870"}
      />

      <Destination
        imgSource={Coastal}
        description={
          "Stunning white sand beaches, pristine marine reserves with excellent diving opportunities, rich Swahili culture, historical sites like Fort Jesus in Mombasa, and diverse wildlife viewing experiences along the coastline"
        }
        price={"ksh. 20,000"}
      />

      <Destination
        imgSource={NairobiPark}
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

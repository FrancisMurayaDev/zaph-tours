import "./Destination.css";
import MountainEscape from "../../assets/mountain-escape.jpg";
import GameDrives from "../../assets/game-drives.jpg";
import BushMeals from "../../assets/bush-meals.jpg";
import Horse from "../../assets/horse-ridding.jpg";
import Bird from "../../assets/bird.jpg";
import Safaris from "../../assets/safaris.jpg";

function Destination() {
  return (
    <>
      <DestinationSection />
    </>
  );
}

function DestinationSection() {
  return (
    <section className="destination-container">
      <div className="destination-container-div">
        <h2 className="destination-heading">explore our destinations</h2>
        <div className="destination-cards-container">
          <DestinationCard
            CardImgSrc={MountainEscape}
            destinationName={"Mountain Escape"}
            destinationDescription={
              "Hike through breathtaking landscapes and enjoy the fresh mountain air."
            }
            groupPrice={"ksh. 50, 000"}
            soloPrice={"ksh.10,000"}
          />

          <DestinationCard
            CardImgSrc={GameDrives}
            destinationName={"Game Drives"}
            destinationDescription={
              "A game drive is a safari activity where you explore a wildlife area in a vehicle."
            }
            groupPrice={"ksh. 50, 000"}
            soloPrice={"ksh.10,000"}
          />

          <DestinationCard
            CardImgSrc={BushMeals}
            destinationName={"Bush Meals"}
            destinationDescription={
              "A bush meal is an outdoor dining experience in nature, featuring local cuisine and surrounded by wildlife."
            }
            groupPrice={"ksh. 50, 000"}
            soloPrice={"ksh.10,000"}
          />

          <DestinationCard
            CardImgSrc={Horse}
            destinationName={"Horse Ridding"}
            destinationDescription={
              "Horse riding is the activity of riding a horse for recreation, sport, or travel, often in nature."
            }
            groupPrice={"ksh. 50, 000"}
            soloPrice={"ksh.10,000"}
          />

          <DestinationCard
            CardImgSrc={Bird}
            destinationName={"Bird Watching"}
            destinationDescription={
              "Bird watching is the observation of wild birds in their natural habitat for leisure, study, or photography."
            }
            groupPrice={"ksh. 50, 000"}
            soloPrice={"ksh.10,000"}
          />

          <DestinationCard
            CardImgSrc={Safaris}
            destinationName={"Walking Safaris"}
            destinationDescription={
              "Walking safaris are guided nature walks that offer an immersive wildlife experience on foot in natural habitats."
            }
            groupPrice={"ksh. 50, 000"}
            soloPrice={"ksh.10,000"}
          />
        </div>
      </div>
    </section>
  );
}

function DestinationCard({
  CardImgSrc,
  destinationName,
  destinationDescription,
  groupPrice,
  soloPrice,
}) {
  return (
    <div className="explore-destination-card-container">
      <img src={CardImgSrc} alt="destination exploration" />
      <div className="card-content">
        <h3>{destinationName}</h3>
        <p className="destination-description">{destinationDescription}</p>
        <p className="explore-price">
          Group: {groupPrice} || Solo: {soloPrice}
        </p>
        <a href="#" className="destination-btn">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Destination;

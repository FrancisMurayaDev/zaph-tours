import "./TripTypes.css";
import HoneyMoon from "../../assets/honeymoon.jpg";
import FamilyTour from "../../assets/family-tour.jpg";
import Adventure from "../../assets/adventure.jpg";
import Cultural from "../../assets/cultural.jpg";
import WildLife from "../../assets/wildlife.jpg";
import EcoTours from "../../assets/eco-tours.jpg";
import Luxury from "../../assets/luxury.jpg";
import Beach from "../../assets/beach.jpg";
import Wellness from "../../assets/wellness.jpg";
import Culinary from "../../assets/culinary.jpg";

function TripTypes() {
  return (
    <div className="trip-types">
      <h2 className="trip-heading">Our Packages</h2>
      <div className="package-container">
        <TripType
          imgTripPackage={HoneyMoon}
          packageCategory={"Honeymoon"}
          categoryDescription={
            "Enjoy a romantic getaway with breathtaking views, luxury stays, and intimate experiences."
          }
          amount={"70,000"}
          members={"2"}
        />

        <TripType
          imgTripPackage={FamilyTour}
          packageCategory={"Family Package"}
          categoryDescription={
            "Perfect for family bonding with fun activities, comfortable stays, and kid-friendly destinations."
          }
          amount={"100,000"}
          members={"4"}
        />

        <TripType
          imgTripPackage={Adventure}
          packageCategory={"Adventure"}
          categoryDescription={
            "Thrilling experiences like mountain trekking, zip-lining, and river rafting await you."
          }
          amount={"54,000"}
          members={"6"}
        />

        <TripType
          imgTripPackage={Cultural}
          packageCategory={"Cultural Tour"}
          categoryDescription={
            " Immerse yourself in rich traditions, visit historical sites, and experience authentic local cultures."
          }
          amount={"100,000"}
          members={"10"}
        />

        <TripType
          imgTripPackage={WildLife}
          packageCategory={"WildLife Safaris"}
          categoryDescription={
            " Get up close with nature’s majestic creatures on guided safari adventures in breathtaking landscapes."
          }
          amount={"30,000"}
          members={"7"}
        />

        <TripType
          imgTripPackage={EcoTours}
          packageCategory={"Eco-Tours"}
          categoryDescription={
            "Explore sustainable travel options that focus on conservation, eco-friendly stays, and responsible tourism."
          }
          amount={"30,000"}
          members={"5"}
        />

        <TripType
          imgTripPackage={Luxury}
          packageCategory={"Luxury Vacation"}
          categoryDescription={
            "Indulge in world-class resorts, private tours, and exclusive experiences designed for ultimate comfort."
          }
          amount={"500,000"}
          members={"2"}
        />

        <TripType
          imgTripPackage={Beach}
          packageCategory={"Beach Holidays"}
          categoryDescription={
            "Relax on pristine beaches, enjoy water sports, and soak in the sun at stunning coastal destinations."
          }
          amount={"90,000"}
          members={"3"}
        />

        <TripType
          imgTripPackage={Wellness}
          packageCategory={"Wellness Retreats"}
          categoryDescription={
            " Rejuvenate your body and mind with yoga sessions, spa treatments, and serene nature escapes."
          }
          amount={"100,000"}
          members={"10"}
        />

        <TripType
          imgTripPackage={Culinary}
          packageCategory={"Culinary Tours"}
          categoryDescription={
            " Savor exquisite cuisines, join cooking classes, and explore food markets for an unforgettable taste adventure."
          }
          amount={"150,000"}
          members={"6"}
        />
      </div>
    </div>
  );
}

export default TripTypes;

function TripType({
  imgTripPackage,
  packageCategory,
  categoryDescription,
  amount,
  members,
}) {
  return (
    <div className="trip-package">
      <img src={imgTripPackage} alt="trip package picture" />
      <div className="package-content">
        <h3 className="package-category">{packageCategory}</h3>
        <p className="category-description">{categoryDescription}</p>
        <p className="categoryPrice">
          Starting from Ksh: {amount} for {members} members
        </p>
        <a href="#" className="tripBtn">
          Learn More
        </a>
      </div>
    </div>
  );
}

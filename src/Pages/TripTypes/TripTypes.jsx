import "./TripTypes.css";
import FamilyTour from "../../assets/family-tour.jpg";

function TripTypes() {
  return (
    <div className="package-container">
      <TripType
        imgTripPackage={FamilyTour}
        packageCategory={"Family Package"}
        categoryDescription={
          "Perfect for family bonding with fun activities, comfortable stays, and kid-friendly destinations."
        }
        amount={"30,000"}
        members={"4"}
      />
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

import "./SatisfiedCustomers.css";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";

function SatisfiedCustomers() {
  return (
    <div className="satisfied-customers">
      <CustomerReview
        quote={
          "Zaph Tours made our vacation unforgettable! The guides were friendly, knowledgeable, and ensured we had the best experience. Highly recommend!"
        }
        imageSource={Customer1}
        name={"John Doe"}
        position={"⭐⭐⭐⭐⭐"}
      />

      <CustomerReview
        quote={
          "Excellent service from start to finish! The booking process was smooth, and the tour was well-organized. Will definitely travel with Zaph Tours again"
        }
        imageSource={Customer2}
        name={"Jane Smith"}
        position={"⭐⭐⭐⭐⭐"}
      />

      <CustomerReview
        quote={
          "Zaph Tours exceeded my expectations! The itinerary was well-planned, the transportation was comfortable, and the team was super professional."
        }
        imageSource={Customer3}
        name={"Joyce Wanga"}
        position={"⭐⭐⭐⭐⭐"}
      />

      <CustomerReview
        quote={
          "A fantastic experience! Zaph Tours took care of every detail, making our trip stress-free and enjoyable. Will be booking again soon!"
        }
        imageSource={Customer4}
        name={"Susan Jhones"}
        position={"⭐⭐⭐⭐⭐"}
      />
    </div>
  );
}

function CustomerReview({ quote, imageSource, name, position }) {
  return (
    <div className="customer-review">
      <p className="quote">{quote}</p>
      <img className="customer-image" src={imageSource} alt="Customer Image" />
      <p className="customer-name">{name}</p>
      <p className="customer-position">{position}</p>
    </div>
  );
}

export default SatisfiedCustomers;

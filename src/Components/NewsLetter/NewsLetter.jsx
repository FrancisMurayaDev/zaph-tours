import "./NewsLetter.css";
import NewsLetterImg from "../../assets/email.jpg"
function NewsLetter() {
  return (
    <section className="news-letter">
      <div className="newsletter-container">
        <div className="newsletter-image">
          <img src={NewsLetterImg} alt="Newsletter Image" />
        </div>
        <div className="newsletter-content">
          <p className="newsletter-text">
            subscribe to our newsLetter for weekly updates.
          </p>
          <div className="newsletter-form">
            <form action="" className="input-form">
              <div className="form-container">
                <input
                  type="text"
                  id="input"
                  required
                  placeholder="Your Email Address"
                  className="subscribe-input"
                />
                <label htmlFor="input">
                  <a href="#" className="subscribe-btn">
                    Subscribe
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;

import Illustration from "../../images/illustration-thank-you.svg";
import PropTypes from "prop-types";

function ThankYou({ ratingNumber }) {
  return (
    <div className="card thank-you">
      <img id="thank-you-img" src={Illustration} alt="Thank you image" />
      <p className="selected">You selected {ratingNumber} out of 5</p>
      <h2>Thank you!</h2>
      <p className="para">
        We appreciate you taking the time to give a rating if you ever need more
        support, dont hesitate to get in touch!
      </p>
    </div>
  );
}

ThankYou.propTypes = {
  ratingNumber: PropTypes.number,
};

export default ThankYou;

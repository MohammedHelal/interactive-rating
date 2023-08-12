import iconStar from "../../images/icon-star.svg";
import RatingBtn from "./RatingBtn.jsx";
import PropTypes from "prop-types";

function Card({
  handleSubmit,
  ratingNumberHandler,
  ratingNotSelected,
  ratingNumber,
}) {
  return (
    <div className="card">
      <img id="star" src={iconStar} alt="star logo" />
      <h2>How did we do?</h2>
      <p className="para">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-btns">
        {[1, 2, 3, 4, 5].map((ele, ind) => (
          <RatingBtn
            key={ind}
            number={ele}
            ratingNumberHandler={ratingNumberHandler}
            ratingNumber={ratingNumber}
          />
        ))}
      </div>
      <button className="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
      {ratingNotSelected && (
        <p className="error">Please select a rating before submitting</p>
      )}
    </div>
  );
}

Card.propTypes = {
  handleSubmit: PropTypes.func,
  ratingNumberHandler: PropTypes.func,
  ratingNotSelected: PropTypes.bool,
  ratingNumber: PropTypes.number,
};

export default Card;

import PropTypes from "prop-types";

function Rating({ number, ratingNumberHandler, ratingNumber }) {
  const btnClasses = ratingNumber == number ? "clicked" : "not-clicked";

  return (
    <button
      className={`rating-btn ${btnClasses}`}
      onClick={ratingNumberHandler}
    >
      {number}
    </button>
  );
}

Rating.propTypes = {
  number: PropTypes.number,
  ratingNumberHandler: PropTypes.func,
  ratingNumber: PropTypes.number,
};

export default Rating;

import RatingCard from "./components/RatingCard.jsx";
import ThankYouCard from "./components/ThankYouCard.jsx";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [ratingNotSelected, setRatingNotSelected] = useState(false);
  const [ratingNumber, setRatingNumber] = useState(0);

  function handleSubmit() {
    if (ratingNumber > 0) {
      setSubmitted(true);
    } else {
      setRatingNotSelected(true);
    }

    console.log(ratingNumber);
  }

  function ratingNumberHandler(event) {
    let rating = parseInt(event.target.innerHTML);
    if (rating >= 1 && rating <= 5) {
      setRatingNumber(rating);
      setRatingNotSelected(false);
    }
  }

  return (
    <>
      {submitted ? (
        <ThankYouCard ratingNumber={ratingNumber} />
      ) : (
        <RatingCard
          submitted={submitted}
          handleSubmit={handleSubmit}
          ratingNumberHandler={ratingNumberHandler}
          ratingNotSelected={ratingNotSelected}
          ratingNumber={ratingNumber}
        />
      )}
    </>
  );
}

export default App;

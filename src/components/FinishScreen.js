function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = "💪";
  if (percentage >= 80 && percentage < 100) emoji = "😊";
  if (percentage >= 50 && percentage < 80) emoji = "👍";
  if (percentage >= 0 && percentage < 50) emoji = "😐";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        {emoji} You scored {points} out of {maxPossiblePoints} ({percentage})%
      </p>
      <p className="highscore">High score is {points}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;


function countdownTimer(startValue, interval = 1000) {
  let remainingTime = startValue;
  console.log(remainingTime);

  const timerId = setInterval(() => {
    remainingTime -= 1;

    if (remainingTime <= 0) {
      clearInterval(timerId);
      return;
    }

    console.log(remainingTime);
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };
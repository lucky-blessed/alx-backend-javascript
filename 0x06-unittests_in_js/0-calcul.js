function calculateNumber(a, b) {
  const RoundedA = Math.round(a);
  const RoundedB = Math.round(b);

  return RoundedA + RoundedB;
}
module.exports = calculateNumber;

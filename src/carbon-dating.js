const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(parameter) {
  if (typeof parameter!=='string') return false;
  let t = parseFloat(parameter);

  if (t > 0 && t <= MODERN_ACTIVITY) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / t) * HALF_LIFE_PERIOD) / 0.693);
    
  }

  return false;
};

module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depth = 1;
      arr.forEach(item => {
        if (Array.isArray(item)) {
          let nestedDepth = this.calculateDepth(item);
          if (depth < 1 + nestedDepth) {
            depth = 1 + nestedDepth;
          }
        }
      });
      return depth;
    }
  };
 
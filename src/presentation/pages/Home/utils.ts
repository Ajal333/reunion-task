export const getPriceRange = (priceRange: number): number[] => {
  switch (+priceRange) {
    case 1:
      return [100, 200];
    case 2:
      return [200, 500];
    default:
      return [0, 99999];
  }
};

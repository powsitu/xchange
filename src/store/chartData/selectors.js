export const selectWeeklyConversion = (state) => {
  return state.chartData.weekly;
};

export const countWeeklyConversion = (state) => {
  return state.chartData.weekly.length;
};

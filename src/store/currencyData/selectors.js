export const selectCurrencies = (state) =>
  state.currencyData.availableCurrencies;

export const selectConversionResult = (state) =>
  state.currencyData.conversionResult;

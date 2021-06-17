export default function converter(amount, currencyFrom, currencyTo, fxData) {
  const amountFromEur = amount / fxData[currencyFrom];
  const amountToReturn = amountFromEur * fxData[currencyTo];
  return amountToReturn;
}

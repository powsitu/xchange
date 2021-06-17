import { subDays } from "date-fns";

export default function chartFeeder() {
  const lastThirtyDays = [];
  for (let num = 30; num >= 0; num--) {
    lastThirtyDays.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 1 + Math.random(),
    });
  }

  return lastThirtyDays;
}

import { ECBAdapter } from "./adapters/ECBAdapter";
import { Excahnge } from "./types";

const ecb = new ECBAdapter();
const data = await ecb.getExchangeRate();

function getMxnRate(rates: Excahnge[]) {
  const mxnRate = rates.find((item) => item.currency === "MXN");
  return mxnRate.rate;
}

console.log("Day:", data.time);
console.log("Exchange Rates:", data.rates);
console.log(`€1.00 EUR = $${getMxnRate(data.rates)} MXN`);

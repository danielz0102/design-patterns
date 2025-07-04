export class ECB {
  async getExchangeRates() {
    const response = await fetch(
      "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    return await response.text();
  }
}

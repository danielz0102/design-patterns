import { parseString } from "xml2js";
import { EuroExchangeProvider, ServiceResponse, XMLResponse } from "../types";
import { ECB } from "../services/ECB";

export class ECBAdapter implements EuroExchangeProvider {
  private ecbService: ECB;

  constructor() {
    this.ecbService = new ECB();
  }

  async getExchangeRate(): Promise<ServiceResponse> {
    const xmlData = await this.ecbService.getExchangeRates();
    const { promise, resolve, reject } =
      Promise.withResolvers<ServiceResponse>();

    parseString(xmlData, (err, result: XMLResponse) => {
      if (err) {
        return reject(new Error("Failed to parse XML data"));
      }

      const rates: ServiceResponse = {
        time: result["gesmes:Envelope"].Cube[0].Cube[0].$.time,
        rates: result["gesmes:Envelope"].Cube[0].Cube[0].Cube.map((item) => ({
          currency: item.$.currency,
          rate: Number(item.$.rate),
        })),
      };

      resolve(rates);
    });

    return promise;
  }
}

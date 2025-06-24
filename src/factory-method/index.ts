import { Logistics } from "./logistics/Logistics";
import { RoadLogistics } from "./logistics/RoadLogistics";
import { SeaLogistics } from "./logistics/SeaLogistics";
import { LOGISTICS_TYPE } from "./config";

function getLogistics(): Logistics {
  if (LOGISTICS_TYPE === "sea") {
    return new SeaLogistics();
  } else if (LOGISTICS_TYPE === "road") {
    return new RoadLogistics();
  } else {
    throw new Error("Invalid logistics type");
  }
}

const logistics = getLogistics();

logistics.planDelivery();

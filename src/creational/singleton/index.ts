import { EventBus } from "./EventBus";

const bus = EventBus.getInstance();
bus.on("testEvent", (data: Record<string, any>) =>
  console.log("Event received:", data)
);
bus.emit("testEvent", { message: "Hello, Singleton!" });

const anotherBus = EventBus.getInstance();
anotherBus.emit("testEvent", {
  message: `bus === anotherBus: ${bus === anotherBus}`,
});

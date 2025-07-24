import { Document } from "./Document";
import { UserClient } from "./observers/UserClient";
import { FileHistory } from "./observers/FileHistory";
import { Logger } from "./observers/Logger";

const document = new Document();
const johnDoe = new UserClient("john_doe");
const janeDoe = new UserClient("jane_doe");
const fileHistory = new FileHistory();
const logger = new Logger();

document.subscribe(johnDoe);
document.subscribe(janeDoe);
document.subscribe(fileHistory);
document.subscribe(logger);

document.write("Hello, world!");

document.print();
document.reset();

const history = fileHistory.getHistory();
console.log("File History:", history);

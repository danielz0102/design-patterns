import { FileManager } from "./FileManager";
import { JSONExport } from "./strategies/JSONExport";
import { XMLExport } from "./strategies/XMLExport";
import { CSVExport } from "./strategies/CSVExport";

const sampleData = "Hello World! This is a sample file content.";
const filename = "sample.txt";

const jsonStrategy = new JSONExport();
const xmlStrategy = new XMLExport();
const csvStrategy = new CSVExport();

const fileManager = new FileManager(jsonStrategy);
fileManager.create(sampleData, filename);

console.log("📄 JSON Export:");
await fileManager.export();
console.log();

console.log("📝 XML Export:");
fileManager.setExportStrategy(xmlStrategy);
await fileManager.export();
console.log();

console.log("📊 CSV Export:");
fileManager.setExportStrategy(csvStrategy);
await fileManager.export();

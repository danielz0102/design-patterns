import { GenericUIBuilder } from "./UIBuilders/GenericUIBuilder";
import { AppSpecsBuilder } from "./UIBuilders/AppSpecsBuilder";
import { UIDirector } from "./Directors/UIDirector";

const genericBuilder = new GenericUIBuilder();
const director = new UIDirector(genericBuilder);

director.buildWebUI();

const webUI = genericBuilder.get();

director.buildWindowsUI();

const windowsUI = genericBuilder.get();

const landingSketch = genericBuilder
  .setWidgets(["navigation sketch", "main sketch", "sidebar sketch"])
  .setLayout("Bento Box")
  .get();

const specsBuilder = new AppSpecsBuilder();
const specs = specsBuilder
  .setTheme(
    "The theme must be the user's preference. It can be changed later, and the app should remember it."
  )
  .setWidgets([
    "Navigation Bar with search functionality",
    "User Profile Dashboard",
    "Real-time Notification Center",
    "Interactive Data Visualization Charts",
    "File Upload & Management System",
    "Chat & Messaging Interface",
    "Calendar & Scheduling Widget",
    "Analytics & Reporting Panel",
    "Settings & Preferences Menu",
    "Dark/Light Mode Toggle",
    "Multi-language Selector",
    "Export/Import Tools",
  ])
  .setSettings({
    maxFileSize: "50MB",
    sessionTimeout: "30 minutes",
    autoSave: true,
    enableNotifications: true,
    defaultLanguage: "English",
    timezone: "UTC",
    dateFormat: "MM/DD/YYYY",
    currency: "USD",
    enableTwoFactorAuth: false,
    dataRetentionPeriod: "2 years",
    enableAnalytics: true,
    maxConcurrentUsers: 1000,
    apiRateLimit: "1000 requests/hour",
    enableCaching: true,
    cacheExpiration: "1 hour",
    enableLogging: true,
    logLevel: "INFO",
    backupFrequency: "daily",
    enableSSL: true,
    minimumPasswordLength: 8,
  })
  .setLayout(
    "Responsive Grid Layout with sidebar navigation, header toolbar, main content area, and collapsible panels"
  )
  .get();

console.dir(
  { webUI, windowsUI, landingSketch, specs },
  { depth: null }
);

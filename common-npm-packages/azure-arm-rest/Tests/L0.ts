import { AzureAppServiceMockTests } from "./L0-azure-arm-app-service";
import { KuduServiceTests } from "./L0-azure-arm-app-service-kudu-tests";
import { ApplicationInsightsTests } from "./L0-azure-arm-appinsights-tests";
import { ApplicationInsightsTests as ApplicationInsightsTestsWebTests } from "./L0-azure-arm-appinsights-webtests-tests";
import { ResourcesTests } from "./L0-azure-arm-resource-tests";
const DEFAULT_TIMEOUT = 1000 * 20;

describe("AzureARMRestTests", () => {
    beforeEach(function () {
        this.timeout(DEFAULT_TIMEOUT);
    });
    describe("KuduService tests", KuduServiceTests)
    describe("AzureAppServiceMock tests", AzureAppServiceMockTests)
    describe("ApplicationInsights tests", ApplicationInsightsTests)
    describe("ApplicationInsightsTests", ApplicationInsightsTests)
    describe("ApplicationInsightsWeb tests", ApplicationInsightsTestsWebTests )
    describe("Resources Tests", ResourcesTests)
});
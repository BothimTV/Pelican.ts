import { BaseClient } from "../BaseClient/BaseClient";
import { checkApiKey } from "../functions/sanitize";

export class ApplicationClient extends BaseClient {

    constructor(panel: string, apiKey: string) {
        checkApiKey(apiKey, "APPLICATION")
        super(panel, apiKey);
    }

}
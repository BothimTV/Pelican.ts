import { BaseClient } from "../BaseClient/BaseClient";
import { checkApiKey } from "../functions/sanitize";

export class UserClient extends BaseClient {

    constructor(panel: string, apiKey: string) {
        checkApiKey(apiKey, "USER")
        super(panel, apiKey);
    }

}
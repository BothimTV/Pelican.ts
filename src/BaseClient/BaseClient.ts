import axios, { AxiosError, AxiosRequestConfig } from "axios";

export class BaseClient {

    private readonly panel: string;
    protected readonly apiKey: string;

    constructor(panel: string, apiKey: string) {
        this.panel = new URL(panel).origin;
        this.apiKey = "Bearer " + apiKey;
    }

    public async apiRequest(config: AxiosRequestConfig): Promise<any> {
        config.url = this.panel + config.url
        config.headers = config.headers || {};
        config.headers["Authorization"] = this.apiKey;
        return await axios.request(config)
            .then(res => res.data)
            .catch(e => {
                let error = e as AxiosError;
                throw error.response?.data;
            })
    }

} 
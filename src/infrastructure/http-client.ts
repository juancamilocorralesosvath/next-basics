import { AxiosResponse } from "axios";
import { HttpClientResponse, HttpConfig, HttpErrorInterceptor, HttpInterceptor, IHttpClient } from "../domain/HttpClient";

export class HttpClient implements IHttpClient {
    baseUrl: string;

    constructor(config: HttpConfig) {
        this.baseUrl = config?.baseUrl || ""
    }
    get<T>(url: string, config?: HttpConfig): Promise<AxiosResponse<T, any, {}>> {
        throw new Error("Method not implemented.");
    }
    post<T>(url: string, data?: any, config?: HttpConfig): Promise<AxiosResponse<T, any, {}>> {
        throw new Error("Method not implemented.");
    }
    put<T>(url: string, data?: any, config?: HttpConfig): Promise<AxiosResponse<T, any, {}>> {
        throw new Error("Method not implemented.");
    }
    delete<T>(url: string, config?: HttpConfig): Promise<AxiosResponse<T, any, {}>> {
        throw new Error("Method not implemented.");
    }

    addResponseInterceptor(interceptor: HttpInterceptor): void {
        throw new Error("Method not implemented.");
    }
    addErrorInterceptor(interceptor: HttpErrorInterceptor): void {
        throw new Error("Method not implemented.");
    }

   /*  private async request<T> (
        method: string,
        url: string,+
        
        data?: Anybody,
        config?: HttpClient
    ): Promise<HttpClientResponse<T>> */
}
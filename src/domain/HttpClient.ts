import { AxiosResponse } from "axios";

export interface HttpConfig {
    baseUrl: string;
    timeout: number;
}

export interface HttpClientResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>

}

export interface HttpClientError {
    message: string;
    status?: number;
    data: any;
    statusText?: string;
}

export type HttpInterceptor = 
(response: HttpClientResponse) => HttpClientResponse | Promise<HttpClientResponse>

export type HttpErrorInterceptor = 
(error: HttpClientError) => HttpClientError | Promise<HttpClientError>

export interface IHttpClient {
    get<T>(url: string, config?: HttpConfig): Promise<AxiosResponse<T, any, {}>>
    post<T>(url: string, data?: any, config?: HttpConfig): Promise<AxiosResponse<T, any, {}>>
    put<T>(url: string, data?: any, config?: HttpConfig): Promise<AxiosResponse<T, any, {}>>
    delete<T>(url: string, config?: HttpConfig): Promise<AxiosResponse<T, any, {}>>
    addResponseInterceptor(interceptor: HttpInterceptor): void
    addErrorInterceptor(interceptor: HttpErrorInterceptor): void
}
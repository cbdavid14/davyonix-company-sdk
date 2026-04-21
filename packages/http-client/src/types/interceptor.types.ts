import type { HttpRequest } from './http-client.types.js';
import type { HttpResponse } from './http-client.types.js';

export type NextInterceptor = (request: HttpRequest) => Promise<HttpResponse<unknown>>;

export interface HttpInterceptor {
  intercept(
    request: HttpRequest,
    next: NextInterceptor,
  ): Promise<HttpResponse<unknown>>;
}

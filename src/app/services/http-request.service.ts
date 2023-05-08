import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { EHttpMethod } from '../interfaces/http-request/http-request';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestService {
    private headers = new HttpHeaders();

    constructor(private http: HttpClient) {
        this.headers = this.headers.set('Content-Type', 'application/json');
    }

    /** Отправляет запрос на сервер с опциональными параметрами и проверкой на ошибку запроса */
    public sendHttpRequest<T>(method: EHttpMethod, url: string = '', paramsData: {} = {}): Observable<T | null> {
        const params = new HttpParams({ fromObject: paramsData });

        switch (method) {
            case EHttpMethod.GET:
                return this.http
                    .get<T>(url, { headers: this.headers, params: params })
                    .pipe(catchError(this.handleError));
            case EHttpMethod.POST:
                return this.http
                    .post<T>(url, paramsData, { headers: this.headers })
                    .pipe(catchError(this.handleError));
            default:
                return of(null);
        }
    }

    /** Метод обработки ошибок http запроса */
    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // Произошла ошибка на стороне клиента или в сети.
            console.error('Ошибка на клиентской части:', error.error);
        } else {
            // Серверная часть вернула код неудачного ответа.
            // Тело ответа может содержать подсказки о том, что пошло не так.
            console.error(`Ошибка на бэкенде: ${error.status}, детально:`, error.error);
        }
        return of(null);
    }
}

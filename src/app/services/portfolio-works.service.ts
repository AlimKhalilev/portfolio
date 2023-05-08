import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWork } from '../interfaces/work/work';
import { environment } from 'src/environments/environment';
import { HttpRequestService } from './http-request.service';
import { EHttpMethod } from '../interfaces/http-request/http-request';

@Injectable({
    providedIn: 'root'
})
export class PortfolioWorksService {
    /** Список всех работ портфолио */
    works: IWork[] | null = null;

    /** Флаг ошибки загрузки работ в портфолио */
    worksLoadError: boolean = false;

    constructor(private httpRequestService: HttpRequestService) {}

    /** Возвращает список работ в портфолио с сервера */
    getAll(): Observable<IWork[] | null> {
        return this.httpRequestService.sendHttpRequest<IWork[]>(EHttpMethod.GET, environment.serverEndpoint + '/portfolio')
    }
}

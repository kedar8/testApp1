import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { CookieService } from "ngx-cookie-service";
@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _cookieService: CookieService, private http: HttpClient) {

    }

    fetch(serviceUrl: string, methodType: string): Observable<any> {
        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8').append('tokenid', this._cookieService.get('tokenid'));
        if (methodType === 'post') {
            return this.http.post(serviceUrl, { headers });
        } else if (methodType === 'get') {
            return this.http.get(serviceUrl, { headers });
        }
    }


    post(serviceUrl: string, methodType: string, requestJson: any): Observable<any> {
        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8').append('tokenid', this._cookieService.get('tokenid'));
        if (methodType === 'post') {
            return this.http.post(serviceUrl, requestJson, { headers });
        } else if (methodType === 'get') {
            return this.http.get(serviceUrl, { headers });
        }
    }

    delete(serviceUrl: string, methodType: string): Observable<any> {
        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8')
        return this.http.delete(serviceUrl, { headers });
    }
}

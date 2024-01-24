import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
    useValue: null,
})
export class DataService {
    constructor(private url: string, private http: HttpClient) {}
    getAll() {
        return this.http.get(this.url);
    }
    getBy(param: any, paramValue: any) {
        return this.http.get(this.url + '?' + param + '=' + paramValue);
    }
    insert(body: any) {
        return this.http.post(this.url, body);
    }
    delete(param: any) {
        return this.http.delete(`${this.url}/${param}`);
    }
}

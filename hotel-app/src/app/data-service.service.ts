import { Reservation } from './reservations.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this._http.get<T>(endpoint);
  }

  put<T>(endpoint: string, id: string, data: T): Observable<T> {
    return this._http.put<T>(endpoint + id, data);
  }

  post<T>(endpoint: string, data: Reservation): Observable<T> {
    return this._http.post<T>(endpoint, data);
  }
  delete<T>(endpoint: string, id: string) {
    return this._http.delete<T>(endpoint + id);
  }
}

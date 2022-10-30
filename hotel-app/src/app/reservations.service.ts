import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data-service.service';

export class Reservation {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  room: number = 1;
  checkin: Date = new Date();
  checkout: Date = new Date();
  numPeople: number = 1;
  price: number = 1;
  country: string = '';
  city: string = '';
}

const BASE_URL = 'http://localhost:5001/';
@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private data: DataService) {}

  getList(): Observable<Reservation[]> {
    return this.data.get(BASE_URL);
  }

  getReservation(id: string): Observable<Reservation> {
    return this.data.get<Reservation>(BASE_URL + id);
  }

  add(reserve: Reservation): Observable<Reservation> {
    return this.data.post(BASE_URL, reserve);
  }

  update(id: string, reserve: Reservation): Observable<Reservation> {
    return this.data.put(BASE_URL, id, reserve);
  }

  delete(id: string): Observable<Reservation[]> {
    return this.data.delete(BASE_URL, id);
  }
}

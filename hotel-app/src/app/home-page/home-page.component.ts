import { ReservationsService } from './../reservations.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  reservations!: Reservation[];
  constructor(private service: ReservationsService, private router: Router) {}

  ngOnInit(): void {
    this.service.getList().subscribe((res) => (this.reservations = res));
  }

  addReservation() {
    this.router.navigate(['reservation', 'new']);
  }

  deleteReservation(id: string) {
    this.service
      .delete(id)
      .subscribe((res: Reservation[]) => (this.reservations = res));
  }

  openDetails(id: string) {
    this.router.navigate(['reservation', id]);
  }
}

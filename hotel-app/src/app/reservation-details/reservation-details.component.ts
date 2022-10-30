import { Reservation, ReservationsService } from './../reservations.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss'],
})
export class ReservationDetailsComponent implements OnInit {
  reservation$!: Observable<Reservation>;

  constructor(
    private ac: ActivatedRoute,
    private service: ReservationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.ac.snapshot.params['id'];
    this.reservation$ =
      id == 'new' ? of(new Reservation()) : this.service.getReservation(id);
  }

  onSubmit(data: Reservation) {
    const operation = data.id
      ? this.service.update(data.id, data)
      : this.service.add(data);

    operation.subscribe({ next: () => this.router.navigate(['..']) });
  }
}

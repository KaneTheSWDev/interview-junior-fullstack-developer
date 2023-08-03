import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from '../interface/city.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'interview-frontend';
  cities$ = Observable<City[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/api/cities').subscribe((res) => {
      console.log(res);
    });
  }
}

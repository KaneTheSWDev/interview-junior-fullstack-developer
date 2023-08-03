import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/interface/city.interface';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private url = 'https://localhost:3000/cities';
  constructor(private httpClient: HttpClient) {}

  // getCities(): Observable<City[]> {
  //   return this.httpClient.get(this.url);
  // }
}

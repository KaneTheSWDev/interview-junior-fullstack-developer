import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/interface/city.interface';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private cities$: Observable<City[]> = new Observable();
  private url = 'http://localhost:3000/api/cities';
  constructor(private httpClient: HttpClient) {}

  getCities(query: string): Observable<City[]> {
    this.cities$ = this.httpClient.get<City[]>(`${this.url}/${query}`);
    return this.cities$;
  }
}

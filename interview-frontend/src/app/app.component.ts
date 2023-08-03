import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../interface/city.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'interview-frontend';
  cities: City[] = [];
  displayedColumns = ['name', 'count'];
  dataSource = new MatTableDataSource<City>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  maxEntries = 5;

  @ViewChild('movieSearchInput', { static: true })
  movieSearchInput!: ElementRef;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      filter((res) => res.length > 2),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.httpClient
          .get(`http://localhost:3000/api/cities/${term}`)
          .subscribe((res: any) => {
            console.log(res);
            this.cities = res;
            this.dataSource = new MatTableDataSource(this.cities);
            this.dataSource.paginator = this.paginator;
          });
      })
    );
  }
}

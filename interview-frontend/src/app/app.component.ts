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
import { FormControl } from '@angular/forms';
import { Observable, Subscription, debounceTime } from 'rxjs';
import { CitiesService } from './cities.service';

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
  inputObservable$: Observable<any> = new Observable();
  subscription: Subscription | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  searchControl = new FormControl();

  constructor(private cityService: CitiesService) {}

  ngOnInit(): void {
    this.inputObservable$ = this.searchControl.valueChanges.pipe(
      debounceTime(400)
    );
    this.subscription = this.inputObservable$.subscribe((value) => {
      if (!value || value === '') {
        this.cities = [];
        this.populateTable();
        return;
      }

      this.cityService.getCities(value).subscribe((res: City[]) => {
        this.cities = res;
        this.populateTable();
      });
    });
  }

  populateTable() {
    this.dataSource = new MatTableDataSource(this.cities);
    this.dataSource.paginator = this.paginator;
  }
}

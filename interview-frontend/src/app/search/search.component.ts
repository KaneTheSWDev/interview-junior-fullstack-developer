import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MOCK_CITIES } from '../../model/cities.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  queryField = new FormControl('');
  cities: any = MOCK_CITIES;
  searchQuery = '';
  // searchResults$: Observable<any>;

  constructor() {
    console.log(this.cities);
  }

  ngOnInit() {}

  searchForCities(query: string) {
    console.log(query);
  }
}

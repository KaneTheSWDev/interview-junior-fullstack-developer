import { Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from '../interfaces/city.interface';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async getCities(): Promise<City[]> {
    return this.citiesService.findAllCities();
  }

  // @Get(':name')
  // async getCityByName(@Param('name') cityName: string): Promise<City> {
  //   console.log(cityName);
  //   return this.citiesService.searchForCity(cityName);
  // }

  @Get(':name')
  async getCityByName(@Param('name') cityName: string): Promise<City[]> {
    console.log(cityName);
    return this.citiesService.findCity(cityName);
  }
}

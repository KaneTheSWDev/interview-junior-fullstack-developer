import { Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from '../interfaces/city.interface';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get(':name')
  async getCityByName(@Param('name') cityName: string): Promise<City[]> {
    console.log(cityName);
    return this.citiesService.findCity(cityName);
  }
}

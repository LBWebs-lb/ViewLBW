import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  public route: string = 'http://localhost:49489/api/clilbs';
  constructor(private httpService: HttpService) { }

  getData(id?: number) {
    if (id > 0) {
      let route: string = this.route + "/" + id;
      return this.httpService.getData(route);
    } else {
      return this.httpService.getData(this.route);
    }
  }
}

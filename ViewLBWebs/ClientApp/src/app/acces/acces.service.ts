import { Injectable } from '@angular/core';
import { Acces } from './acces';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})

export class AccesService {

  public accesses: Acces[];
  public route: string = 'http://localhost:49489/api/LBAcces';

  constructor(private httpService: HttpService) { }

  getData(id?: number) {
    if (id > 0) {
      let route: string = this.route + "/" + id;
      return this.httpService.getData(route);
    } else {
      return this.httpService.getData(this.route);
    }
  }

  deleteData(id: number) {
    return this.httpService.deleteData(id, this.route);
  }

  addData(accesForm: Acces) {
    return this.httpService.addData(this.route, accesForm);
  }

  updateData(accesUpdateForm: Acces, id: number) {
    let route: string = this.route + "/" + id;
    return this.httpService.UpdateData(route, accesUpdateForm)
  }
  descrinptpassword(id: number){
    return this.httpService.DesPassword(this.route + "/getpass/" + id);
  }
}

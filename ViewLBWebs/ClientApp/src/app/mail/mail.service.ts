import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Mail } from './mail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class MailService {

  public route: string = 'http://localhost:49489/api/LBMails';

  constructor(private httpService: HttpClient) { }

  getData(id?: number) {
    if (id > 0) {
      this.route = this.route + "/" + id;
    }
    return this.httpService.get(this.route);
  }

  public addData(mail: Mail) {
    console.log(mail);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpService.post<Mail>(this.route, mail, httpOptions);
  }

  public deleteData(id: number): Observable<void> {
    return this.httpService.delete<void>(`${this.route}/${id}`);
  }

  public UpdateData(route: string, mail: Mail) {
    return this.httpService.put<Mail>(route, mail);
  }


}

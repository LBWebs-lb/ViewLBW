import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup } from '@angular/forms';
import { Acces } from '../acces/acces';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private httpService: HttpClient) { }

  public getData(route: string) {
    return this.httpService.get(route);
  }

  public addData(route: string, acces: Acces) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpService.post<Acces>(route, acces, httpOptions);
  }

  public UpdateData(route: string, acces: Acces) {
    return this.httpService.put<Acces>(route, acces);
  }

  public deleteData(id: number, route: string): Observable<void> {
    return this.httpService.delete<void>(`${route}/${id}`);
  }

  public DesPassword(route: string) {
    return this.httpService.get(route)
  }

}

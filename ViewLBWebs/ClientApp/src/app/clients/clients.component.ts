import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { Clients } from './clients';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent {
  panelOpenState = false;
  dataSource;
  displayedColumns: string[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getData()
      .subscribe((result) => {
        this.displayedColumns = ['dnom', 'est', 'dobs', 'tcli'];
        this.dataSource = result as Clients[];
      },
        (error) => {
          console.error(error);
        });
  } 
}

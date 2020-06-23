import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  panelOpenState = false;

  //constructor(private ClientService: ClientService) { }
  constructor() { }

  ngOnInit() {
    //this.ClientService.getData()
    //  .subscribe((result) => {
    //    //this.displayedColumns = ['userWp', 'passWd', 'linkWp', 'acc', 'accions'];
    //    //this.dataSource = result as Acces[];
    //  },
    //    (error) => {
    //      console.error(error);
    //    });
  } 
}

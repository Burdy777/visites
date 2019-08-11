import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/shared/models/visite';
import { VisiteService } from 'src/app/shared/services/visite.service';



@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.scss']
})
export class VisitesComponent implements OnInit {
  displayedColumns: string[] = ['leaders', 'hotes', 'date', 'observations'];
  dataSource:Array<Visite> = [];

  constructor(public visiteService: VisiteService) { }

  ngOnInit() {
    this.dataSource = this.visiteService.visites;
  }

 
  

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/component/dialog/dialog.component';

export interface PeriodicElement {
  hotes: string;
  leaders: number;
  date: number;
  observations: string;
}

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.scss']
})
export class VisitesComponent implements OnInit {
  displayedColumns: string[] = ['leaders', 'hotes', 'date', 'observations'];
  dataSource = [
    {leaders: 1, hotes: 'Hydrogen', date: 1.0079, observations: 'Hljlj'},
    {leaders: 2, hotes: 'Helium', date: 4.0026, observations: 'Heljk'},
    {leaders: 3, hotes: 'Lithium', date: 6.941, observations: 'Liljk'},
    {leaders: 4, hotes: 'Beryllium', date: 9.0122, observations: 'Blkle'},
    {leaders: 5, hotes: 'Boron', date: 10.811, observations: 'Bnzndkz'},
    {leaders: 6, hotes: 'Carbon', date: 12.0107, observations: 'Ckjkn'},
    {leaders: 7, hotes: 'Nitrogen', date: 14.0067, observations: 'joN'},
    {leaders: 8, hotes: 'Oxygen', date: 15.9994, observations: 'Oljklj'},
    {leaders: 9, hotes: 'Fluorine', date: 18.9984, observations: 'ojojF'},
    {leaders: 10, hotes: 'Neon', date: 20.1797, observations: 'Nelkjlj'},
  ];;
  constructor(public dialog:MatDialog) { }

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(() => console.log('Data récupéré'))
  }
  

}

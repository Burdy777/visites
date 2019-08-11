import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/visites/shared/component/dialog/dialog.component';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.scss']
})
export class VisiteComponent implements OnInit {
  @Input() displayedColumns;
  @Input() dataSource;
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(() => console.log('Data récupéré'))
  }
}

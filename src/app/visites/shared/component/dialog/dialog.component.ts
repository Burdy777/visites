import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
visitesForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.buildForm()
  }

  public buildForm() {
    this.visitesForm = new FormGroup({
      'leaders': new FormControl('', ),
      'hote': new FormControl('',Validators.required),
      'date': new FormControl(),
      'observations': new FormControl()
    })
  }
}
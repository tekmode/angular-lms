import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  sname:string;
  srollno:string;
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  addstudent(){
   
  var ret;
  let student={
    name:this.sname,
    rollno:this.srollno
  };
this._data.addstudent(student).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Student Added')
  );
  alert("Student Added Successfully");
  this.sname='';
  this.srollno='';
    }

  }



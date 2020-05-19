import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  tokenstatus:boolean=false;
  public username='';
  constructor(private authService:AuthService,
    private router:Router){}

    

  ngOnInit(): void {
  this.loader()
}
loader(){
  if (localStorage.getItem("id_token") === null) {
    this.tokenstatus=true;
    }
var currentUser = JSON.parse(localStorage.getItem("user"));
this.username = currentUser.name;
if (!this.username) {
this.username = "No User Name";
}
}
logout(){
  this.authService.logout();
  this.router.navigate(['login']);
}  
}

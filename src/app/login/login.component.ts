import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
   password: string;
   data:any={}

    constructor(
      private authService: AuthService,
      private router: Router,
      private flashMessage: FlashMessagesService
    ) { }
   
    ngOnInit() {
      const user = {
            username: this.username,
            password: this.password
          }
    this.authService.authenticateUser(user).subscribe(rdata => {
      this.data = rdata;
    });
 }
    onLoginSubmit(){
      const user = {
        username: this.username,
        password: this.password
      }
      this.authService.authenticateUser(user).subscribe(rdata => {
      this.data = rdata;
      if(this.data.success && this.data.user.admin) {
        this.authService.storeUserData(this.data.token, this.data.user);
        console.log(this.data);
        this.flashMessage.show('You are now logged in as Admin', 
        {cssClass: 'alert-success', timeout: 3000});
        setTimeout(() => {
        this.router.navigate(['']);
      }
      , 3000);
          }
      else if(this.data.success) {
          this.authService.storeUserData(this.data.token, this.data.user);
          console.log(this.data);
          this.flashMessage.show('You are now logged in as '+this.data.user.role, 
          {cssClass: 'alert-success', timeout: 3000});
          setTimeout(() => {
          this.router.navigate(['']);
        }
        , 3000);   
         } 
        else {
        this.flashMessage.show(this.data.statusText, {cssClass: 'alert-danger', timeout: 5000});
    setTimeout(() => {
    this.router.navigate(['login']);
  }
  , 5000);
  }
    });
    
     
    }
 
  
}

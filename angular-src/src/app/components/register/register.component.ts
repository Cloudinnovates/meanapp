import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../../models/user';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User;

  constructor(
    private router: Router,
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    if(!this.validateService.validateRegister(this.user)){
      this.flashMessages.show('Please Fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    if(!this.validateService.validateEmail(this.user.email)){
      this.flashMessages.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    this.authService.registerUser(this.user).subscribe(data =>{
      if(data.success){
        this.flashMessages.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      }else{
        this.flashMessages.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);        
      }
    });

  }



}

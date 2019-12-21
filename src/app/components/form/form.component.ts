import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.login(this.email, this.password)
    .then(res => {
      this.flashMessages.show('You are now logged in', {
        cssClass: 'alert-success', timeout: 3000
      });
      this.router.navigate(['/page']);
    })
    .catch(err => {
      this.flashMessages.show('Please, write correct email and password', {
        cssClass: 'alert-danger', timeout: 3000
      });
    });
  }


}

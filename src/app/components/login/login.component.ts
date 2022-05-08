import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    username:'',
    password:''
  };
  loggedInUser: User;
  // creating a custom event on this component
  @Output() loginOrLogout: EventEmitter<any> = new EventEmitter();

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.userServ.checkLogin();
  }

  async logIn(): Promise<void> {
    this.loggedInUser = await this.userServ.logIn(this.credentials);
    // fires the custom event
    this.loginOrLogout.emit();
  }

  logOut(): void {
    sessionStorage.removeItem('Auth-Token');
    this.loggedInUser=null;
    // firing the custom event
    this.loginOrLogout.emit();
  }

}

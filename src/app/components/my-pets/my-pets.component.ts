import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {
  loggedInUser: User;
  
  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.userServ.checkLogin();
  }

}

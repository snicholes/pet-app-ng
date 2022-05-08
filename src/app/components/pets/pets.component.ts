import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { User } from 'src/app/models/user';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[];
  loggedInUser: User;
  petSearchText:string = '';

  constructor(private userServ: UserService, private petServ: PetService) { }

  ngOnInit(): void {
    this.getPets();
    this.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.userServ.checkLogin();
  }

  getPets() {
    // when we subscribe to the Observable, it sends the request
    // and we can set up what we want to do with the response
    // in a callback function
    this.petServ.getPets().subscribe(
      resp => {
        this.pets = resp;
      });
  }

  // doing the same with Fetch
  // async getPets(): Promise<void> {
  //   this.pets = await this.petServ.getPets();
  // }
}

import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { User } from 'src/app/models/user';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  // @Input decorator makes this field an attribute on the component directive - 
  // basically, it makes it so that when you use <app-pet></app-pet> you can add
  // "pet" as an attribute of that tag: <app-pet [pet]="value"></app-pet>
  @Input() pet: Pet;
  loggedInUser: User;
  dateExample: Date = new Date();

  constructor(private userServ: UserService, private petServ: PetService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.userServ.checkLogin();
  }

  adopt(): void {
    this.petServ.adopt(this.loggedInUser, this.pet).subscribe(
      resp => {
        this.loggedInUser = resp;
        this.pet.status.name='Adopted';
      }
    );
    // this was for handling the fetch promise
    // this.loggedInUser = await this.petServ.adopt(this.loggedInUser, this.pet);
    // this.pet.status='Adopted';
  }

}

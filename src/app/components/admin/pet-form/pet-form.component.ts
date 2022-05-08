import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { Status } from 'src/app/models/status';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  @Input() mode: string;
  pet: Pet;

  constructor(private petServ: PetService) { }

  ngOnInit(): void {
    this.initPet();
  }

  initPet(): void {
    this.pet = new Pet(0,'',0,'','',new Status(1, 'Available'));
  }

  retrievePet(): void {
    if (this.pet.id) {
      this.petServ.getPetById(this.pet.id).subscribe(
        resp=>{
          this.pet=resp;
        },
        error=>{
          this.pet.name = '';
          this.pet.species = '';
          this.pet.description = '';
          this.pet.age = 0;
          this.pet.status = new Status(1, 'Available');
        }
      );
    }
  }

  submit(): void {
    if (this.mode==='add') this.addPet();
    else if (this.mode==='edit') this.editPet();
  }

  addPet():void {
    this.pet.id=0;
    this.petServ.addPet(this.pet).subscribe(
      resp=>{
        this.initPet();
      }
    );
  }

  editPet():void {
    this.petServ.editPet(this.pet).subscribe(
      resp=>{
        this.initPet();
      }
    );
  }
}

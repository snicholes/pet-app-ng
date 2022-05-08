import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../models/pet';

@Pipe({
  name: 'petSearch'
})
export class PetSearchPipe implements PipeTransform {

  // implement this to do what we want the pipe to do
  // value is the value to the left of the pipe operator (|)
  // and args is any other parameters we want the pipe to have
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(pets: Pet[], searchText: string): Pet[] {
    let filteredPets = [];
    searchText = searchText.toLowerCase();

    for (let pet of pets) {
      if (pet.name.toLowerCase().includes(searchText) 
      || pet.description.toLowerCase().includes(searchText) 
      || pet.species.toLowerCase().includes(searchText)) {
        filteredPets.push(pet);
      }
    }

    return filteredPets;
  }
}

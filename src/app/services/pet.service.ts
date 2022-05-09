import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pet } from '../models/pet';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  url: string = `${environment.url}`;
  headers = {'Content-type':'application/json'};

  // dependency injection: injecting HttpClient
  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get(this.url + 'pets').pipe(
      // format/map the response body as an array of pets
      map(resp => resp as Pet[])
    );
  }

  // doing the same with Fetch
  // async getPets(): Promise<Pet[]> {
  //   let httpResponse = await fetch(this.url + 'pets');

  //   if (httpResponse && httpResponse.status===200) {
  //       return await httpResponse.json();
  //   }
  // }

  adopt(loggedInUser: User, pet: Pet): Observable<User> {
    if (loggedInUser) {
      return this.http.put(this.url + 'pets/' + pet.id + '/adopt', loggedInUser, {headers:this.headers}).pipe(
        map(resp => resp as User)
      );
    }
  }

  // async adopt(loggedInUser:User, pet:Pet): Promise<User> {
  //   let userJSON = JSON.stringify(loggedInUser);
  //   if (loggedInUser) {
  //       let httpResponse = await fetch(this.url + 'pets/' + pet.id + '/adopt',
  //           {method:'PUT', body:userJSON});
  //       if (httpResponse && httpResponse.status===200) {
  //           return await httpResponse.json();
  //       }
  //   }
  // }

    getPetById(id:number):Observable<Pet> {
      return this.http.get(this.url + 'pets/' + id).pipe(
        map(resp=>resp as Pet)
      );
    }

    addPet(pet:Pet): Observable<Pet> {
      return this.http.post(this.url + 'pets', pet, {headers:this.headers}).pipe(
        map(resp=>resp as Pet)
      );
    }

    editPet(pet:Pet): Observable<Pet> {
      return this.http.put(this.url + 'pets/' + pet.id, pet, {headers:this.headers}).pipe(
        map(resp=>resp as Pet)
      );
    }
}

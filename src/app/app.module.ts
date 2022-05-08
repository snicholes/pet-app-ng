import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { MyPetsComponent } from './components/my-pets/my-pets.component';
import { PetComponent } from './components/pet/pet.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { PetService } from './services/pet.service';
import { PetSearchPipe } from './pipes/pet-search.pipe';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { PetFormComponent } from './components/admin/pet-form/pet-form.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsComponent,
    MyPetsComponent,
    PetComponent,
    LoginComponent,
    PetSearchPipe,
    ManageUserComponent,
    AdminComponent,
    PetFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService, // added so that i can inject this as a dependency to my components
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

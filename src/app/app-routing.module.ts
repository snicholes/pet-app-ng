import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { MyPetsComponent } from './components/my-pets/my-pets.component';
import { PetsComponent } from './components/pets/pets.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'pets',
    component:PetsComponent
  },
  {
    path:'mypets',
    component:MyPetsComponent
  },
  {
    path:'manage',
    component:ManageUserComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

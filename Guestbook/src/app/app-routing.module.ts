import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { from } from 'rxjs';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'add-entry',component:AddEntryComponent},
{path:'guestbook',component:GuestbookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

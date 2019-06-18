import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { HomeComponent } from './home/home.component';
import { AddEntryComponent } from './add-entry/add-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestbookComponent,
    HomeComponent,
    AddEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

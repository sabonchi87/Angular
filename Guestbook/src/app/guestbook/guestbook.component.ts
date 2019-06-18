import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { EntryService } from 'src/app/services/entry.service';
@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  myHero = 'My name is Hasanain Alsabonchi';

  // guestbook: Guestbook = {
  //   id: 1,
  //   name: 'John'
  //   //Date:'55';
  // };

  constructor( private tasksServ:EntryService,private router:Router   ) { 
     
    }

  


  ngOnInit() {
  }

  Delete(i){
this.tasksServ.Delete(i)

  }




}

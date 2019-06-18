import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/services/entry.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  constructor(private tasksServ:EntryService,private router:Router ) { }

    ngOnInit() {
    }

    addEntry(name, message) {
      this.tasksServ.addEntry(name.value,message.value)
      this.router.navigate(['/guestbook']);
      
    }

}

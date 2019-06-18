import { Injectable } from '@angular/core';
import {Entry} from '../interfaces/entry'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EntryService {
  entries:Array <Entry>=[{name:"john",message:"Hi"},{name:"Jack",message:"Howdy"},
  {name:"May",message:"Nice"}
]
  constructor(private tasksServ:EntryService,private router:Router ) {}


  addEntry(name, message) {
    this.entries.push({name,message}
      )
    
    
  }


  Delete(i){

    this.entries.splice(i,1)
  }


}


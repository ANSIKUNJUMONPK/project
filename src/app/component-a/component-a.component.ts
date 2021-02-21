import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgModel} from "@angular/forms"

import { FormControl,FormBuilder} from '@angular/forms';

import { Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  componenta = this.fb.group({
    username: ['', [Validators.required,Validators.minLength(8),Validators.pattern('[a-z,0-9 ]*')]],
    firstname: ['',[Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    phoneno: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]]
  });
  public form=[]
  constructor(private fb: FormBuilder,private dataservice:DataService) { }

  ngOnInit(): void {
    
   
  }
  onSubmit(){
    this.dataservice.sendform(this.componenta.value)
  console.log(this.componenta.value)
     
this.componenta.reset()
  }
}

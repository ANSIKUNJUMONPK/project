import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  constructor(private dataservice:DataService) { }
datas=[]
  ngOnInit(): void {
    this.dataservice.inputdata$
    .subscribe(
      inputs=>{
        this.datas.push(inputs)
      }
    )
    }
  }



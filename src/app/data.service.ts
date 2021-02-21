import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private componentasource= new Subject<any>();
 inputdata$=this.componentasource.asObservable();
  constructor() { }
 sendform(inputs:any){
this.componentasource.next(inputs)
 }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  public msg: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  resetData(newValue: boolean): void {
    this.msg.next(newValue);
  }
}

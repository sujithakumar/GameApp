import { Component, SimpleChanges } from '@angular/core';
import { AppServiceService } from '../app/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameBoard';



  constructor(private AppServiceService: AppServiceService) {

  }



}

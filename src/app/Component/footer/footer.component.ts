import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  constructor(private AppServiceService: AppServiceService) { }

  ngOnInit(): void {
  }

  resetData(): void {
    this.AppServiceService.resetData(true);
  }


}

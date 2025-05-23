import { Component } from '@angular/core';
import { BANNER_INPUTS } from 'src/app/shared/constants/banner-costants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent {

  bannerdata = BANNER_INPUTS.welcome;
}

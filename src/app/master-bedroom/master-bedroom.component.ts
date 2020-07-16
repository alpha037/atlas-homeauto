import { Component } from '@angular/core';

import { Appliance } from '../models/appliance';
import { ApplianceService } from '../services/appliance.service';

@Component({
  selector: 'app-master-bedroom',
  templateUrl: './master-bedroom.component.html',
  styleUrls: ['./master-bedroom.component.css'],
})
export class MasterBedroomComponent {
  appliance: Appliance;
  isLoading: boolean = true;

  hasErrors: boolean = false;

  constructor(private applianceService: ApplianceService) {
    this.applianceService
      .getRoomApplianceState('room1')
      .subscribe((appliance) => {
        if (!appliance || !Object.keys(appliance).length) this.hasErrors = true;

        this.appliance = appliance;
        this.isLoading = false;
      });
  }
}

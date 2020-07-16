import { Component } from '@angular/core';

import { Appliance } from '../models/appliance';
import { ApplianceService } from '../services/appliance.service';

@Component({
  selector: 'app-guest-room',
  templateUrl: './guest-room.component.html',
  styleUrls: ['./guest-room.component.css'],
})
export class GuestRoomComponent {
  appliance: Appliance;
  isLoading: boolean = true;

  hasErrors: boolean = false;

  constructor(private applianceService: ApplianceService) {
    this.applianceService
      .getRoomApplianceState('room2')
      .subscribe((appliance) => {
        if (!appliance || !Object.keys(appliance).length) this.hasErrors = true;

        this.appliance = appliance;
        this.isLoading = false;
      });
  }
}

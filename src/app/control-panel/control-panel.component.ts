import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Appliance } from '../models/appliance';
import { ApplianceService } from '../services/appliance.service';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
})
export class ControlPanelComponent {
  @Input('appliance') appliance: Appliance;
  @Input('room-number') room: string;

  constructor(
    private applianceService: ApplianceService,
    private snackBar: MatSnackBar
  ) {}

  toggleLightState() {
    this.applianceService.toggleLightState(this.room);

    this.appliance.lightState
      ? this.openSnackBar(this.appliance.room, {
          appliance: 'light',
          state: 'off',
        })
      : this.openSnackBar(this.appliance.room, {
          appliance: 'light',
          state: 'on',
        });
  }

  toggleFanState() {
    this.applianceService.toggleFanState(this.room);

    this.appliance.fanState
      ? this.openSnackBar(this.appliance.room, {
          appliance: 'fan',
          state: 'off',
        })
      : this.openSnackBar(this.appliance.room, {
          appliance: 'fan',
          state: 'on',
        });
  }

  openSnackBar(room: string, options: { appliance: string; state: string }) {
    this.snackBar.open(
      `${room} ${options.appliance} is turned ${options.state}.`,
      'Okay',
      {
        duration: 5000,
      }
    );
  }
}

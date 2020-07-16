import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Appliance } from '../models/appliance';

@Injectable({
  providedIn: 'root',
})
export class ApplianceService {
  constructor(private db: AngularFireDatabase) {}

  toggleLightState(room: string) {
    this.db
      .object(`/${room}/light_status`)
      .query.ref.transaction((currentLightState) =>
        (<string>currentLightState).toLowerCase() === 'on' ? 'OFF' : 'ON'
      );
  }

  toggleFanState(room: string) {
    this.db
      .object(`/${room}/fan_status`)
      .query.ref.transaction((currentFanState) =>
        (<string>currentFanState).toLowerCase() === 'on' ? 'OFF' : 'ON'
      );
  }

  getRoomApplianceState(room: string): Observable<Appliance> {
    return this.db
      .object(`/${room}`)
      .snapshotChanges()
      .pipe(
        map((data) => {
          if (!data.payload.exists()) return <Appliance>{};

          const LIGHT_STATUS: string = (data.payload.val()[
            'light_status'
          ] as string).toLowerCase();

          const FAN_STATUS: string = (data.payload.val()[
            'fan_status'
          ] as string).toLowerCase();

          let lightState: boolean,
            fanState: boolean,
            lightSwitch: string,
            fanSwitch: string;

          if (LIGHT_STATUS === 'on') {
            lightState = true;
            lightSwitch = 'TURN OFF';
          } else {
            lightState = false;
            lightSwitch = 'TURN ON';
          }

          if (FAN_STATUS === 'on') {
            fanState = true;
            fanSwitch = 'TURN OFF';
          } else {
            fanState = false;
            fanSwitch = 'TURN ON';
          }

          return <Appliance>{
            room: room === 'room1' ? 'Master Bedroom' : 'Guest Room',
            lightState: lightState,
            lightSwitch: lightSwitch,
            fanState: fanState,
            fanSwitch: fanSwitch,
          };
        })
      );
  }

  getMainDoorDistance() {
    return this.db.object('/main-door/distance').valueChanges();
  }
}

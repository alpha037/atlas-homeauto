import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Email } from '../../assets/smtp';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private db: AngularFireDatabase) {}

  sendIntruderAlert() {
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'Guardian Bot',
      Password: 'Teamalpha07!',
      To: [
        'subhronil.dutta@gmail.com',
        'purbitasaha0907@gmail.com',
        'annasimmi03@gmail.com',
        'palpabitra339@gmail.com',
        'uditmukherjee150@gmail.com',
      ],
      From: 'teamalpha037@gmail.com',
      Subject: 'INTRUDER ALERT!!',
      Body: `Unauthorized access detected! \n\n\n\nSomeone is trying to infiltrate your home. Please take action!`,
    }).then((message) => {
      if (message !== 'OK')
        this.db.list('/errors').push({
          date: new Date().toDateString(),
          time: new Date().toTimeString(),
          type: 'Email Error',
          message: message,
        });
    });
  }
}

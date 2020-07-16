import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import { Twilio } from 'twilio';

admin.initializeApp(functions.config().firebase);

// const accountSid = 'Your account Sid';
// const authToken = 'Your auth Token';

// const client = new Twilio(accountSid, authToken);

export const sendAlert = functions.database
  .ref('/main_door/distance')
  .onUpdate((event) => {
    functions.logger.log('Working');

    return admin
      .database()
      .ref('/main_door/distance')
      .once('value')
      .then((snapshot) => snapshot.val())
      .then((doorDistance) => {
        const distance = <number>doorDistance.distance;

        /**
         *
         * Only works if a billing account is associated with your project
         *
         */

        // if (distance < 15)
        // return client.messages.create({
        //   body:
        //     '\n\nINTRUDER ALERT! \n\n Someone is trying infiltrate your home. Please take action!',
        //   from: 'number provided by Twilio',
        //   to: 'your number with country code',
        // });

        distance < 15
          ? functions.logger.log(
              'Intruder Alert. Someone is trying infiltrate your home. Please take action!'
            )
          : functions.logger.log('All systems normal.');

        return Promise.resolve({ finished: true });
      })
      .then((message) => functions.logger.log(message))
      .catch((err) => functions.logger.log(err));
  });

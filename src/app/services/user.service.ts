import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  saveUser(user: firebase.User) {
    this.db.object(`/users/${user.uid}`).update({
      name: user.displayName,
      email: user.email,
      lastLoggedIn: `${new Date().toDateString()} ${new Date().toTimeString()}`,
    });
  }

  getUser(uid: string) {
    return this.db.object(`/users/${uid}`);
  }
}

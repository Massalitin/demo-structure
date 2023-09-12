import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoggedInUserService {
  loggedInUser!: IUser;
  constructor() {}
}

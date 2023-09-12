import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.model';

const exampleUser: IUser = {
  id: '1d2e',
  firstName: 'Example',
  secondName: 'User',
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}
  auth(): Observable<IUser> { return of(exampleUser)}
}

import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { take } from 'rxjs';
import { LoggedInUserService } from './services/logged-in-user.service';
import { IUser } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-structure';
  constructor(
    private auth: AuthenticationService,
    private lu: LoggedInUserService
  ) {
    this.auth
      .auth()
      .pipe(take(1))
      .subscribe((user: IUser) => {
        this.lu.loggedInUser = user;
      });
  }
}

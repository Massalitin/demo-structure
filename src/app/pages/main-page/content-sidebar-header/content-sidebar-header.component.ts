import { Component } from '@angular/core';
import { LoggedInUserService } from 'src/app/services/logged-in-user.service';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-content-sidebar-header',
  templateUrl: './content-sidebar-header.component.html',
  styleUrls: ['./content-sidebar-header.component.scss'],
})
export class ContentSidebarHeaderComponent {
  constructor(public lu: LoggedInUserService, private tab: TabsService) {}

  openUserProfile() {
    this.tab.selectedTab = {
      tabType: 'user-profile',
      id: 'profile',
      ownerId: 'me',
      tabTitle: 'profile',
    };
  }
}

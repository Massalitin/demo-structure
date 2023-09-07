import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
})
export class NavSidebarComponent {
  navigationItems: Array<{ path: string; icon: string; title: string }> = [
    {
      path: 'recent',
      icon: 'history',
      title: 'Recent',
    },
    {
      path: 'buddies',
      icon: 'star',
      title: 'Buddies',
    },
    {
      path: 'groups',
      icon: 'group',
      title: 'Groups',
    },
  ];
}

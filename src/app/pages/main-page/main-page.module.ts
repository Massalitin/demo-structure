import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavSidebarModule } from 'src/app/components/nav-sidebar/nav-sidebar.module';
import { RouterModule, Routes } from '@angular/router';
import { ContentSidebarHeaderComponent } from './content-sidebar-header/content-sidebar-header.component';
import { AvatarModule } from 'src/app/components/avatar/avatar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChatModule } from 'src/app/components/tabs/chat/chat.module';
import { UserProfileModule } from 'src/app/components/tabs/user-profile/user-profile.module';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'groups',
        loadChildren: () =>
          import('../groups-page/groups-page.module').then(
            (m) => m.GroupsPageModule
          ),
      },
      {
        path: 'buddies',
        loadChildren: () =>
          import('../buddies-page/buddies-page.module').then(
            (m) => m.BuddiesPageModule
          ),
      },
      {
        path: 'recent',
        loadChildren: () =>
          import('../recent-page/recent-page.module').then(
            (m) => m.RecentPageModule
          ),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  declarations: [MainPageComponent, ContentSidebarHeaderComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    NavSidebarModule,
    RouterModule.forChild(routes),
    AvatarModule,
    MatIconModule,
    MatButtonModule,
    ChatModule,
    UserProfileModule
  ],
})
export class MainPageModule {}

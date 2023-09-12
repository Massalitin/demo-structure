import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavSidebarModule } from 'src/app/components/nav-sidebar/nav-sidebar.module';
import { ContentSidebarModule } from 'src/app/components/content-sidebar/content-sidebar.module';
import { RouterModule, Routes } from '@angular/router';

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
  // {
  //   path: 'groups',
  //   loadChildren: () => import('../groups-page/groups-page.module').then(
  //     (m) => m.GroupsPageModule
  //   ),
  // },
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    ContentSidebarModule,
    NavSidebarModule,
    RouterModule.forChild(routes),
  ],
})
export class MainPageModule {}

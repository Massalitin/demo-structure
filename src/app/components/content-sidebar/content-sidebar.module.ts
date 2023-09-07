import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSidebarComponent } from './content-sidebar.component';
import { ContentSidebarHeaderComponent } from './content-sidebar-header/content-sidebar-header.component';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'groups',
//     loadChildren: () => import('../../pages/groups-page/groups-page.module').then(
//       (m) => m.GroupsPageModule
//     ),
//   },
// ];

@NgModule({
  declarations: [ContentSidebarComponent, ContentSidebarHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ContentSidebarComponent],
})
export class ContentSidebarModule {}

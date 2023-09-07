import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSidebarComponent } from './content-sidebar.component';
import { ContentSidebarHeaderComponent } from './content-sidebar-header/content-sidebar-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContentSidebarComponent, ContentSidebarHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ContentSidebarComponent],
})
export class ContentSidebarModule {}

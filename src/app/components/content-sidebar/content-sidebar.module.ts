import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSidebarComponent } from './content-sidebar.component';
import { ContentSidebarHeaderComponent } from './content-sidebar-header/content-sidebar-header.component';

@NgModule({
  declarations: [ContentSidebarComponent, ContentSidebarHeaderComponent],
  imports: [CommonModule],
  exports: [ContentSidebarComponent],
})
export class ContentSidebarModule {}

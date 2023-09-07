import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSidebarComponent } from './nav-sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavSidebarComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [NavSidebarComponent],
})
export class NavSidebarModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentPageComponent } from './recent-page.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: RecentPageComponent }];

@NgModule({
  declarations: [RecentPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RecentPageModule {}

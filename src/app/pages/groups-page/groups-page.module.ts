import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsPageComponent } from './groups-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: GroupsPageComponent},
]

@NgModule({
  declarations: [
    GroupsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GroupsPageModule { }

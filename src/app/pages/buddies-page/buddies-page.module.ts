import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuddiesPageComponent } from './buddies-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: BuddiesPageComponent},
]


@NgModule({
  declarations: [
    BuddiesPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BuddiesPageModule { }

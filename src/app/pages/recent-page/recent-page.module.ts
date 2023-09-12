import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentPageComponent } from './recent-page.component';
import { RouterModule } from '@angular/router';
import { ChatItemModule } from 'src/app/components/chat-item/chat-item.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes = [{ path: '', component: RecentPageComponent }];

@NgModule({
  declarations: [RecentPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChatItemModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class RecentPageModule {}

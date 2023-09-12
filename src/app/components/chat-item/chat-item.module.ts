import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatItemComponent } from './chat-item.component';
import { AvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [ChatItemComponent],
  imports: [CommonModule, AvatarModule],
  exports: [ChatItemComponent],
})
export class ChatItemModule {}

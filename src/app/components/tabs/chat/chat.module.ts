import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatHeaderComponent,
    ChatBoxComponent,
    ChatHistoryComponent,
    ChatMessageComponent,
  ],
  imports: [CommonModule],
  exports: [ChatComponent],
})
export class ChatModule {}

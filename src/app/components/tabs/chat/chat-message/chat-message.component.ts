import { Component, Input } from '@angular/core';
import { IChatMessage, MessageType } from '../chat.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {
  msgTypes = MessageType;
  @Input() msg!: IChatMessage;
}

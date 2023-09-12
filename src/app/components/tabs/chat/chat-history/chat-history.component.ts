import { Component, Input } from '@angular/core';
import { IChatMessage } from '../chat.model';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss'],
})
export class ChatHistoryComponent {
  @Input() messages!: Array<IChatMessage>;
}

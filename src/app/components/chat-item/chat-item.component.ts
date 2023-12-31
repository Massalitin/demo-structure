import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent {
  @Input() chatName!: string;
  @Input() avatarColor!: string;
  @Input() avatarUrl!: string;
  @Input() lastMessage!: string;
}

import { Component, Input } from '@angular/core';
import { IChatMessage } from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @Input() chatTitle!: string;
  @Input() messages!: Array<IChatMessage>;
}
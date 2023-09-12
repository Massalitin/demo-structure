import { Component } from '@angular/core';
import { IChatMessage, MessageType } from 'src/app/components/tabs/chat/chat.model';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  exampleMessages: Array<IChatMessage> = [
    {
      id: 'test',
      timestamp: Date.now(),
      content: 'INBOUND test text',
      author: 'user',
      type: MessageType.INBOUND,
    },
    {
      id: 'test2',
      timestamp: Date.now(),
      content: 'OUTBOUND test text',
      author: 'user',
      type: MessageType.OUTBOUND,
    },
  ];
  constructor(public tabs: TabsService) {}
}

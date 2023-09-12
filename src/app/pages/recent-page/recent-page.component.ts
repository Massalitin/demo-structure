import { Component } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-recent-page',
  templateUrl: './recent-page.component.html',
  styleUrls: ['./recent-page.component.scss'],
})
export class RecentPageComponent {
  constructor(private tabs: TabsService) {}
  recentChats: Array<IChatItem> = [
    {
      chatName: 'sample chat',
      avatarColor: 'orange',
      lastMessage: 'Remember ME!'
    },
    {
      chatName: 'sample chat_2',
      avatarColor: 'blue',
      lastMessage: 'Remember ME!'
    },
    {
      chatName: 'sample chat_3',
      avatarColor: 'orange',
      lastMessage: 'Remember ME!'
    },
    {
      chatName: 'sample chat_4',
      avatarColor: '#91d18f',
      lastMessage: 'Remember ME!'
    }
  ];

  openTab(chatItem: IChatItem) {
    this.tabs.selectedTab = {
      id: 'test_id',
      ownerId: 'owner_test_id',
      tabType: 'chat',
      tabTitle: chatItem.chatName
    }
  }
}

export interface IChatItem {
  chatName: string;
  avatarColor: string;
  avatarUrl?: string;
  lastMessage: string;
}

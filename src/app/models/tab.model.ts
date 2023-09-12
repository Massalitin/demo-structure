export interface ITab {
  tabType: 'chat' | 'settings' | 'fax' | 'user-profile';
  id: string;
  ownerId: string;
  tabTitle: string;
}

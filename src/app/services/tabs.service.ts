import { Injectable } from '@angular/core';
import { ITab } from '../models/tab.model';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  selectedTab!: ITab;
  constructor() { }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() set fullName(val: string) {
    const splitName: Array<string> = val?.split(' ');
    if (splitName) {
      if (splitName.length > 1) {
        this.placeholder = splitName[0][0] + splitName[1][0];
      } else {
        this.placeholder = splitName[0].substring(0, 2);
      }
      this.placeholder = this.placeholder.toUpperCase();
    } else {
      this.placeholder = '';
    }
  }
  @Input() color!: string;
  @Input() avatarUrl!: string;
  placeholder: string = '';
}

import {Component, Input, Output, EventEmitter} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppAuthService } from '@service/auth/app.auth.service';

@Component({
  selector: 'app-nav-user-profile',
  templateUrl: 'app.nav.user-profile.html',
  styleUrls: ['app.nav.user-profile.css'],
})
export class AppUserProfileComponent {
  name = '';
  @Input() receivedParentMessage: string;

  // Message emitter to (to the parent or other component)
  @Output() messageToEmit = new EventEmitter<string>();

  messageToSendC: string = 'Hello Parent !';

  constructor(
    private translate: TranslateService,
    public authService: AppAuthService
  ) {
    translate.setDefaultLang('fr');
  }
  public setProfileName(name: string) {
    this.name = name;
  }

  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message);
  }

  logout() {
    this.authService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { User } from '@entity/User';

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  private overlayContainer: OverlayContainer;

  userConnected: User;

  receivedChildMessage: string;
  messageToSendP = 'Bonjour !!!';

  constructor() {}

  sendToChild(message: string) {
    this.messageToSendP = message;
  }

  getMessage(message: string) {
    this.receivedChildMessage = message;
  }

  ngOnInit() {

  }

}

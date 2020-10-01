import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() messageName: string;
  @Input() messageContent: string;
  @Input() messageLoveIt: number;
  @Input() messageCreatedAt: Date;

  greenClick = false;
  redClick = false;

  onGreen() {
    if (this.messageLoveIt !== 1) {
      return this.messageLoveIt = 1
    } else {
      return this.messageLoveIt = 0
    }
  };

  onRed() {
    if (this.messageLoveIt !== -1) {
      return this.messageLoveIt = -1
    } else {
      return this.messageLoveIt = 0
    }
  }


  
  constructor() { }

  ngOnInit(): void {
  }

}

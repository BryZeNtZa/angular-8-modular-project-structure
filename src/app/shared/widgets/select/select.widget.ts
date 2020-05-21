import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.widget.html',
  styleUrls: ['./select.widget.scss']
})
export class SpinnerComponent {
  @Input() public selected = 0;
  @Input() public data: string;
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styles: [
  ]
})
export class ContentHeaderComponent implements OnInit {

  @Input() pageHeader: string;
  constructor() { }

  ngOnInit(): void {
  }

}

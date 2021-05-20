import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating:number;
  @Input() productDetail:boolean = false;
  @Input() productReview:boolean = false;
  @Input() numberOfReviews:number;
  constructor() { }

  ngOnInit(): void {
  }

}

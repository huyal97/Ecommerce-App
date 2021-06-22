import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { IProduct } from 'src/app/shared/models/product';
import { IReview } from 'src/app/shared/models/review';
import { IUser } from 'src/app/shared/models/user';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']})

export class ReviewComponent implements OnInit {

  @Input() reviews : IReview[];
  @Input() product : IProduct;
  currentUser$: BehaviorSubject<IUser>;
  reviewForm: FormGroup;
  isSubmited:boolean=false;
  review : IReview = {comment:null,rating:null,userEmail:null,productId:null } ;

  constructor(private accountService : AccountService, private toastr: ToastrService,
    private shopService: ShopService) { }

  ngOnInit(): void {
    this.createLoginForm();

    this.currentUser$ = this.accountService.currentUserSource;

  }
  createLoginForm() {
    this.reviewForm = new FormGroup({
      comment: new FormControl(),
      rating: new FormControl(),
    });
  }
  onChange(){
    console.log(this.reviewForm.value);


  }
  reviewToPost(){
    this.review.comment = this.reviewForm.get("comment").value.toString();
    this.review.rating = this.reviewForm.get("rating").value.toString();
    this.review.productId=this.product.id;
    this.review.userEmail=this.currentUser$.value.displayName;
    console.log(this.review);
  }

  onSubmit() {
    this.reviewToPost();

    this.shopService.postReviews(this.review).subscribe(
      (data) => { // Success
      console.log(data)
      this.toastr.success("Your review submitted!");
      this.isSubmited= true;
      this.loadReviews();
    },
    (error) => {
      console.error("Error: " + JSON.stringify(error));
      this.toastr.error("Error when submit review.");
    });


  }
  loadReviews(){

    this.shopService.getReviews(this.product.id).subscribe(reviews =>{
      this.reviews=reviews;

      console.log(this.reviews);
    }, error => {
      console.log(error)
    } )
  }
}

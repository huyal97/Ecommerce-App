import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  currentUser$: BehaviorSubject<IUser>;
  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUserSource;
  }

}

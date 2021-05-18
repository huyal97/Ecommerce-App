import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductItemComponent } from './home-product-item.component';

describe('HomeProductItemComponent', () => {
  let component: HomeProductItemComponent;
  let fixture: ComponentFixture<HomeProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

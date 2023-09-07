import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddiesPageComponent } from './buddies-page.component';

describe('BuddiesPageComponent', () => {
  let component: BuddiesPageComponent;
  let fixture: ComponentFixture<BuddiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuddiesPageComponent]
    });
    fixture = TestBed.createComponent(BuddiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

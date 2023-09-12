import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSidebarHeaderComponent } from './content-sidebar-header.component';

describe('ContentSidebarHeaderComponent', () => {
  let component: ContentSidebarHeaderComponent;
  let fixture: ComponentFixture<ContentSidebarHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentSidebarHeaderComponent]
    });
    fixture = TestBed.createComponent(ContentSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

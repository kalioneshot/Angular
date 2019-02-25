import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserDetailsComponent } from './create-user-details.component';

describe('CreateUserDetailsComponent', () => {
  let component: CreateUserDetailsComponent;
  let fixture: ComponentFixture<CreateUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

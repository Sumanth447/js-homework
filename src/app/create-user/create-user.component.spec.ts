import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {UserService} from '../user.service';

import {CreateUserComponent} from './create-user.component';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the service', inject([UserService], (userService: UserService) => {
    expect(userService).toBeTruthy();
  }));

  it('component should be defined', () => {
    expect(component).toBeDefined();
  });
});

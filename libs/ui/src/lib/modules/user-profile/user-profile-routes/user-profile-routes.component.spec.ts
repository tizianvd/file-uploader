import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileRoutesComponent } from './user-profile-routes.component';

describe('UserProfileRoutesComponent', () => {
  let component: UserProfileRoutesComponent;
  let fixture: ComponentFixture<UserProfileRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileRoutesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyNotificationsComponent } from './daily-notifications.component';

describe('DailyNotificationsComponent', () => {
  let component: DailyNotificationsComponent;
  let fixture: ComponentFixture<DailyNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

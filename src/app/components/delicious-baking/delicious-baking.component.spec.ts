import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliciousBakingComponent } from './delicious-baking.component';

describe('DeliciousBakingComponent', () => {
  let component: DeliciousBakingComponent;
  let fixture: ComponentFixture<DeliciousBakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliciousBakingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliciousBakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

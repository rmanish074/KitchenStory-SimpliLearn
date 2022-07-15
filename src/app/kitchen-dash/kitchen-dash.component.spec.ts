import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenDashComponent } from './kitchen-dash.component';

describe('KitchenDashComponent', () => {
  let component: KitchenDashComponent;
  let fixture: ComponentFixture<KitchenDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

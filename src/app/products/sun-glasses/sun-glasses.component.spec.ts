import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunGlassesComponent } from './sun-glasses.component';

describe('SunGlassesComponent', () => {
  let component: SunGlassesComponent;
  let fixture: ComponentFixture<SunGlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunGlassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

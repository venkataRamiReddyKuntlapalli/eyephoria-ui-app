import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLensesComponent } from './contact-lenses.component';

describe('ContactLensesComponent', () => {
  let component: ContactLensesComponent;
  let fixture: ComponentFixture<ContactLensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

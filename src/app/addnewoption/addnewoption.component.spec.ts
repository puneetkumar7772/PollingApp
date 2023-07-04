import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewoptionComponent } from './addnewoption.component';

describe('AddnewoptionComponent', () => {
  let component: AddnewoptionComponent;
  let fixture: ComponentFixture<AddnewoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddnewoptionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddnewoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepollComponent } from './updatepoll.component';

describe('UpdatepollComponent', () => {
  let component: UpdatepollComponent;
  let fixture: ComponentFixture<UpdatepollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

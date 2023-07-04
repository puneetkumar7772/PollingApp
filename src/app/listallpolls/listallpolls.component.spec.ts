import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallpollsComponent } from './listallpolls.component';

describe('ListallpollsComponent', () => {
  let component: ListallpollsComponent;
  let fixture: ComponentFixture<ListallpollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallpollsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListallpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

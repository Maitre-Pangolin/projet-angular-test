import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartlocalComponent } from './martlocal.component';

describe('MartlocalComponent', () => {
  let component: MartlocalComponent;
  let fixture: ComponentFixture<MartlocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartlocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MartlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

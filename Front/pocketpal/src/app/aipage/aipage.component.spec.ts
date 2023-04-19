import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIpageComponent } from './aipage.component';

describe('AIpageComponent', () => {
  let component: AIpageComponent;
  let fixture: ComponentFixture<AIpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

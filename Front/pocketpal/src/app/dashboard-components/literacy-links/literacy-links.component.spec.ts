import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteracyLinksComponent } from './literacy-links.component';

describe('LiteracyLinksComponent', () => {
  let component: LiteracyLinksComponent;
  let fixture: ComponentFixture<LiteracyLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteracyLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteracyLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

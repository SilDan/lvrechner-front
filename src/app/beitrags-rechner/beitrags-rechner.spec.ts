import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeitragsRechner } from './beitrags-rechner';

describe('BeitragsRechner', () => {
  let component: BeitragsRechner;
  let fixture: ComponentFixture<BeitragsRechner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeitragsRechner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeitragsRechner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

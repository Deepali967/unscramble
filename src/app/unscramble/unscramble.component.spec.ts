/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnscrambleComponent } from './unscramble.component';

describe('UnscrambleComponent', () => {
  let component: UnscrambleComponent;
  let fixture: ComponentFixture<UnscrambleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnscrambleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnscrambleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

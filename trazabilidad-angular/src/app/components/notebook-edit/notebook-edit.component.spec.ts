import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookEditComponent } from './notebook-edit.component';

describe('NotebookEditComponent', () => {
  let component: NotebookEditComponent;
  let fixture: ComponentFixture<NotebookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

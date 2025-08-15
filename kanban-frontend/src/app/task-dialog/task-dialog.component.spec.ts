// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { TaskDialogComponent } from './task-dialog.component';

// describe('TaskDialogComponent', () => {
//   let component: TaskDialogComponent;
//   let fixture: ComponentFixture<TaskDialogComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ TaskDialogComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TaskDialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// task-dialog.component.spec.ts
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDialogComponent } from './task-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KanbanService } from '../service/kanban-service.service';
import { TaskService } from '../service/task.service';
import { of } from 'rxjs';

describe('TaskDialogComponent', () => {
  let component: TaskDialogComponent;
  let fixture: ComponentFixture<TaskDialogComponent>;

  const mockDialogRef = { close: jasmine.createSpy('close') };
  const mockData = { title: 'New Task', kanbanId: '1', task: { title: '', description: '', color: '' } };
  const mockKanbanService = { saveNewTaskInKanban: () => of({}) };
  const mockTaskService = { updateTask: () => of({}) };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule
      ],
      declarations: [ TaskDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockData },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: KanbanService, useValue: mockKanbanService },
        { provide: TaskService, useValue: mockTaskService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on close()', () => {
    component.close();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should save new task', () => {
    component.save();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});

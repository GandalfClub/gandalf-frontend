import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAnswer, ITask} from '../models/task';
import {TasksTypes} from '../models/tasks-creator';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  @Input()
  public taskList: ITask[];

  @Output()
  public selectedTask: EventEmitter<ITask> = new EventEmitter<ITask>();

  public ngOnInit(): void {
    this.taskList = [
      {
        taskName: 'task 1',
        taskType: TasksTypes.single,
        mentorCheck: false,
        maxScore: 100,
        question: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda esse iure laboriosam natus non porro quam rem sed similique?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda esse iure laboriosam natus non porro quam rem sed similique?</p>',
        answers: new Set([
          {
            label: 'label',
            isCorrect: false,
          },
          {
            label: 'Some label12',
            isCorrect: true,
          },
        ]),
      },
      {
        taskName: 'task 2',
        taskType: TasksTypes.coding,
        mentorCheck: true,
        maxScore: 300,
        question: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda esse iure laboriosam natus non porro quam rem sed similique?</p>',
        code: `function a() {\n console.log(\'Hello world\');\n}`,
      },
      {
        taskName: 'task 3',
        taskType: TasksTypes.multiple,
        mentorCheck: false,
        maxScore: 60,
        question: '<p>Question text3</p>',
        answers: new Set([
          {
            label: 'Some label31',
            isCorrect: false,
          },
          {
            label: 'Some label32',
            isCorrect: true,
          },
        ]),
      }
    ];
  }

  get tasksLength(): number {
    return this.taskList?.length ?? 0;
  }

  public showTask(index: number): void {
    this.selectedTask.emit(this.taskList[index]);
  }

  public addNewTask(): void {
    const defaultTask: ITask = {
      taskName: 'Task name',
      taskType: TasksTypes.single,
      mentorCheck: false,
      maxScore: null,
      question: null,
      answers: new Set<IAnswer>([
       {
          label: '',
          isCorrect: false,
        },
        {
          label: '',
          isCorrect: false,
        },
      ]),
    };

    this.taskList.unshift(defaultTask);
    this.showTask(0);
  }
}

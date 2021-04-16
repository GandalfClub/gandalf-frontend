import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, TasksTypes } from '../../landing/models/task.model';

@Injectable({
	providedIn: 'root'
})
export class EventInfoService {

	constructor() { }

	public fetchTasks(): Observable<Task[]> {
		// temprorary return mock data
		return of([{
			id: 'key1',
			taskName: 'task 1',
			taskType: TasksTypes.Single,
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
			id: 'key2',
			taskName: 'task 2',
			taskType: TasksTypes.Coding,
			mentorCheck: true,
			maxScore: 300,
			question: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda esse iure laboriosam natus non porro quam rem sed similique?</p>',
			code: `function a() {\n console.log(\'Hello world\');\n}`,
		},
		{
			id: 'key3',
			taskName: 'task 3',
			taskType: TasksTypes.Multiple,
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
		]);
	}
}
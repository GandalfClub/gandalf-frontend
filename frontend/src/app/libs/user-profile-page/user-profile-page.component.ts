import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFacadeService } from './store/user/user.facade';
import { Router } from '@angular/router';
import { EntityWrapper } from '../auth/models/entity-wraper';
import { EntityStatus } from '../auth/models/entity-status';
import { User } from '../auth/models/user';

@Component({
	selector: 'app-user-config',
	templateUrl: './user-profile-page.component.html',
	styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit, OnDestroy {
	private destroySource: Subject<boolean> = new Subject<boolean>();
	public profileForm: FormGroup;
	public userForm: User;

	constructor(private userFacadeService: UserFacadeService, private router: Router, private formBuilder: FormBuilder) {
		this.profileForm = formBuilder.group({
			email: [''],
			password: [''],
			mobilePhone: [''],
			firstName: [''],
			secondName: [''],
		});
	}

	private navigateFromUserProfile(): void {
		this.router.navigate(['/']);
	}

	private setValuesToForm(): void {
		this.profileForm.setValue({
			email: this.userForm.email,
			password: this.userForm.password,
			firstName: this.userForm.firstName,
			secondName: this.userForm.secondName,
			mobilePhone: this.userForm.mobilePhone,
		});
	}

	private getChangesFromForm(): User {
		const valuesFromForm: User = {
			id: this.userForm['id'],
			isAdmin: false,
			email: this.profileForm.value.email,
			password: this.profileForm.value.password,
			firstName: this.profileForm.value.firstName,
			secondName: this.profileForm.value.secondName,
			mobilePhone: this.profileForm.value.mobilePhone,
		};
		return valuesFromForm;
	}

	public ngOnInit(): void {
		this.userFacadeService.getUserFromAuth();
		this.userFacadeService.user$.pipe(takeUntil(this.destroySource)).subscribe((user: EntityWrapper<User>) => {
			if (user.status === EntityStatus.Success) {
				this.userForm = user.value;
			}
		});
		if (this.userForm !== null) {
			this.setValuesToForm();
		}
	}

	public updateUserInfo(): void {
		const formValue: User = this.getChangesFromForm();
		this.userFacadeService.updateUser(formValue);
	}

	public submit(): void {
		const formValue: any = this.createChangedUser(this.profileForm.value);
		formValue._id = this.userForm._id;
		this.userFacadeService.updateUser(formValue);
	}

	public ngOnDestroy(): void {
		this.destroySource.next(true);
		this.destroySource.complete();
	}

	public backFromUserProfilePage(): void {
		this.navigateFromUserProfile();
	}
}

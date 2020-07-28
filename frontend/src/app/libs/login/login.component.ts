import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserCredentials } from '../auth/models/user-credentials';
import { AuthFacadeService } from '../auth/store/auth/auth.facade';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public credentials: UserCredentials;
	public errorMessageSub: Subscription;
	public isAuthenticatedSub: Subscription;
	public errorMessage: string;
	public isAuthenticated: boolean;

	constructor(private authFacadeService: AuthFacadeService) { }

	public ngOnInit(): void {
		this.errorMessageSub = this.authFacadeService.errorMessage$.subscribe(
			(error: string) => this.errorMessage = error,
		);
		this.isAuthenticatedSub = this.authFacadeService.isAuthenticated$.subscribe(
			(status: boolean) => this.isAuthenticated = status,
		);
	}

	public onSubmit(): void {
		this.authFacadeService.logIn(this.credentials.email, this.credentials.password);
	}

	public loginByGithub(): void {
		this.authFacadeService.loginByGithub();
	}
}

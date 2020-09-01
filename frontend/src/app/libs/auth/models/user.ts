export interface User {
	id: string;
	email: string;
	isAdmin: boolean;
	displayName?: string;
	photoUrl?: string;
	firstName?: string;
	secondName?: string;
	mobilePhone?: string;
	password?: string;
}

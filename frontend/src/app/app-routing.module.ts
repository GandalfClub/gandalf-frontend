import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'signin',
		loadChildren: () => import('./libs/sign-in/sign-in.module').then((m: typeof import('./libs/sign-in/sign-in.module')) => m.SignInModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

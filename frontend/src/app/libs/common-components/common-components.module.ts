import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CreateDraftEventPopoverComponent } from './create-draft-event-popover/create-draft-event-popover.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { PopoverComponent } from './components/popover/popover.component';
import { ScrollbarDirective } from './directives/scrollbar/scrollbar.directive';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabsPanelComponent } from './components/tabs-panel/tabs-panel.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventCardDateComponent } from './components/event-card/components/event-card-date/event-card-date.component';

@NgModule({
	declarations: [
		SlideToggleComponent,
		CreateDraftEventPopoverComponent,
		ButtonComponent,
		InputComponent,
		ProgressBarComponent,
		ScrollbarDirective,
		PopoverComponent,
		RadioGroupComponent,
		TabsComponent,
		TabsPanelComponent,
		TagListComponent,
		EventCardComponent,
		EventCardDateComponent],
	imports: [
		ReactiveFormsModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		CommonModule,
		MatIconModule,
		MatTooltipModule,
		MatSlideToggleModule,
		FormsModule,
		MatCardModule,
		MatCheckboxModule,
		MatMenuModule,
		MatProgressBarModule,
		MatRadioModule,
		MatTabsModule,
		MatChipsModule,
	],
	exports: [
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		CommonModule,
		FormsModule,
		MatCardModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatTooltipModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		CreateDraftEventPopoverComponent,
		FormsModule,
		ButtonComponent,
		SlideToggleComponent,
		InputComponent,
		MatProgressBarModule,
		ProgressBarComponent,
		RadioGroupComponent,
		PopoverComponent,
		ScrollbarDirective,
		TabsComponent,
		TabsPanelComponent,
		TagListComponent,
		EventCardComponent
	],
	providers: [
		{
			provide: MatDialogRef,
			useValue: {},
		},
	],
})
export class CommonComponentsModule {}

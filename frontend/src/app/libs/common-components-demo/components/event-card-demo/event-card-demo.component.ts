import { Component } from '@angular/core';
import { EventCardColor } from 'src/app/libs/common-components/components/event-card/models/event-card-color';
import { EventCardRole } from 'src/app/libs/common-components/components/event-card/models/event-card-role';
import { EventCardRoundedCorner } from 'src/app/libs/common-components/components/event-card/models/event-card-rounded-corner';
import { EventCardSize } from 'src/app/libs/common-components/components/event-card/models/event-card-size';
import { EventCardDataDemo } from '../../models/event-card-data-demo';

@Component({
  selector: 'app-event-card-demo',
  templateUrl: './event-card-demo.component.html',
  styleUrls: ['./event-card-demo.component.scss']
})
export class EventCardDemoComponent {

	public eventCardData: EventCardDataDemo[] = [
		{
			title: 'Speed Coding Challenge',
			startDate: new Date('2020-01-01'),
			endDate: new Date('2020-01-05'),
			roles: [ EventCardRole.Manager, EventCardRole.Mentor, EventCardRole.HR]
		},
		{
			title: 'Goolang: Building components',
			startDate: new Date('2020-01-01'),
			endDate: new Date('2020-01-05'),
			roles: [ EventCardRole.HR ]
		}
	];

	public cardSizeSmall: EventCardSize = EventCardSize.Small;
	public cardSizeLarge: EventCardSize = EventCardSize.Large;

	public roundedCorners: EventCardRoundedCorner[] = [
		EventCardRoundedCorner.TopLeft,
		EventCardRoundedCorner.TopRight,
		EventCardRoundedCorner.BottomLeft,
		EventCardRoundedCorner.BottomRight
	];

	public colors: EventCardColor[] = [
		EventCardColor.Primary,
		EventCardColor.Secondary,
		EventCardColor.Tertiary
	];
}

import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { eventDescriptionFeatureKey } from '../store.module';
import { EventState } from './event-state';
import { EntityWrapper } from 'src/app/libs/auth/models/entity-wraper';
import { EventCard } from '../../../landing/models/event';

export const selectEventState: MemoizedSelector<{}, EventState> = createFeatureSelector<EventState>(eventDescriptionFeatureKey);

export const selectEvent: MemoizedSelector<{}, EntityWrapper<EventCard>> = createSelector(selectEventState, (state: EventState) => state.event);

export const selectEventValue: MemoizedSelector<{}, EventCard> = createSelector(selectEventState, (state: EventState) => state.event.value);

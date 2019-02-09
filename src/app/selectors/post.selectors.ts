import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectPosts = (state: AppState) => state.posts;
export const selectPostsCount = createSelector(selectPosts, state => state.length);

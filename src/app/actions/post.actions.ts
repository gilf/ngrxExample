import { Action, createSelector } from '@ngrx/store';
import { Post } from '../models/Post';

/* Action names */
export enum POST_ACTIONS {
  ADD_POST = '[POST] Add',
  REMOVE_POST = '[POST] Remove',
  LOAD_POSTS = '[POST] Load',
  SET_POSTS = '[POST] Set'
}

/* Action Creators */
export class AddPost implements Action {
  readonly type = POST_ACTIONS.ADD_POST;

  constructor(public payload: Post) {}
}

export class RemovePost implements Action {
  readonly type = POST_ACTIONS.REMOVE_POST;

  constructor(public payload: number) {}
}

export class LoadPosts implements Action {
  readonly type = POST_ACTIONS.LOAD_POSTS;
}

export class SetPosts implements Action {
  readonly type = POST_ACTIONS.SET_POSTS;

  constructor(public payload: Post[]) {}
}

// Exporting the actions
export type Actions = AddPost | RemovePost | LoadPosts | SetPosts;

import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as PostActions from '../actions/post.actions';
import { map, switchMap } from 'rxjs/operators';
import { PostService } from '../services/post.service';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType(PostActions.POST_ACTIONS.LOAD_POSTS),
    switchMap(() => {
      return this.postService.loadPosts()
        .pipe(
          map(posts => {
            return new PostActions.SetPosts(posts);
          })
        );
    })
  );
}

import { Post } from '../models/Post';
import * as PostActions from '../actions/post.actions';

const initialState: Post = {
  name: 'Post 1',
  content: 'This is post 1 content',
  url: 'http://google.com'
};

export function reducer(state: Post[] = [initialState], action: PostActions.Actions) {
  switch (action.type) {
    case PostActions.POST_ACTIONS.ADD_POST: {
      return [...state, action.payload];
    }
    case PostActions.POST_ACTIONS.REMOVE_POST: {
      state = [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
      return state;
    }
    case PostActions.POST_ACTIONS.SET_POSTS: {
      state = action.payload;
      return state;
    }
    default: {
      return state;
    }
  }
}

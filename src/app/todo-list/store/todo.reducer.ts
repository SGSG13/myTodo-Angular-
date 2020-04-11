import { CustomAction, Todo } from '../../shared/interfaces';
import * as TodoActions from './todo.actions';


export interface State {
  items: Todo[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  items: [],
  loading: false,
  error: ''
};

export function todoReducer(
  state = initialState,
  action: TodoActions.TodoActions,
) {
  switch (action.type) {
    case TodoActions.LOAD_ITEMS_REQUEST:
      return Object.assign({...state}, { loading: true });
    case TodoActions.LOAD_ITEMS_SUCCESS:
      return Object.assign({...state}, { items: (<CustomAction>action).payload, loading: false });
    case TodoActions.LOAD_ITEMS_FAIL:
      return Object.assign({...state}, { error: (<CustomAction>action).error, loading: false });
    default:
      return state;
  }
}

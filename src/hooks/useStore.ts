import { ActionType, Toast } from "core/toast";
import { useEffect, useState } from "react";

type Action = 
  | {
      type: ActionType.UPSERT_TOAST;
      toast: Toast
    }
  | {
      type: ActionType.UPDATE_TOAST;
      toast: Toast
    }
  | {
      type: ActionType.ADD_TOAST;
      toast: Toast
    }


interface State {
  toasts: Toast[];
}

export const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case ActionType.ADD_TOAST: 
      return {
        ...state,
        toasts: [action.toast, ...state.toasts]
      }

    case ActionType.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) => 
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      }

    case ActionType.UPSERT_TOAST: 
      const { toast } = action;
      return state.toasts.find(t => t.id === toast.id)
        ? reducer(state, { type: ActionType.UPDATE_TOAST, toast })
        : reducer(state, { type: ActionType.ADD_TOAST, toast })

    default: 
      return state;
  }
}

let listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

export const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);

  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

export const useStore = (toastOptions = {}): State  => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);

    return () => {
      const index = listeners.indexOf(setState);

      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }, [state])

  return {
    ...state
  }
}
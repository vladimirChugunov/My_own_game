import questionsInitialState from './questionInitialState'

// eslint-disable-next-line default-param-last
function questionsReducer(state = questionsInitialState, action) {
  switch (action.type) {
    case 'DISABLE_BUTTON':
      const {categoryName} = action.payload;
      const stateCopy = {
        ...state,
        [categoryName]: [
          ...state[categoryName]
        ],
      };

      const question = stateCopy[categoryName].find((q) => q.id === action.payload.id)
      question.visible = !question.visible;

      return stateCopy;

    default:
      return state;
  }
}

export default questionsReducer;

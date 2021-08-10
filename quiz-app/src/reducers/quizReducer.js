import { CHANGE_AMOUNT, CHANGE_TYPE, SET_SCORE } from '../constants/actionTypes';
import { SET_INDEX } from '../constants/actionTypes';
import { SET_QUESTIONS } from '../constants/actionTypes';
import { CHANGE_LOADING } from '../constants/actionTypes';
import { CHANGE_CATEGORY } from '../constants/actionTypes';

const initState = {
    index: 0,
    score: 0,
    options: {
        loading: false,
        question_category: ``,
        question_difficulty: ``,
        question_type: ``,
        amount_of_questions: 50
    },
    questions: []
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return {
                ...state,
                options: {
                    ...state.options,
                    loading: action.value
                }
            }
        case "CHANGE_CATEGORY":
            return {
                ...state,
                options: {
                    ...state.options,
                    question_category: action.value
                }
            }
        case "CHANGE_DIFFICULTY":
            return {
                ...state,
                options: {
                    ...state.options,
                    question_difficulty: action.value
                }
            }
        case "CHANGE_TYPE":
            return {
                ...state,
                options: {
                    ...state.options,
                    question_type: action.value
                }
            }

        case "CHANGE_AMOUNT":
            return {
                ...state,
                options: {
                    ...state.options,
                    amount_of_questions: action.value
                }
            }
        case "SET_QUESTIONS":
            return {
                ...state,
                questions: action.questions
            }

        case "SET_INDEX":
            return {
                ...state,
                index: action.index
            }

        case "SET_SCORE":
            return {
                ...state,
                score: action.score
            }
        default:
            return state
    }
};

export default Reducer;
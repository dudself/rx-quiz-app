import { CHANGE_AMOUNT, CHANGE_TYPE, SET_SCORE } from '../constants/actionTypes';
import { SET_INDEX } from '../constants/actionTypes';
import { SET_QUESTIONS } from '../constants/actionTypes';
import { CHANGE_LOADING } from '../constants/actionTypes';
import { CHANGE_CATEGORY } from '../constants/actionTypes';


export const setScore = value => {
    return {
        type: 'SET_SCORE',
    };
};

export const setIndex = () => {
    return {
        type: 'SET_INDEX',
    };
};

export const setQuestions = () => {
    return {
        type: 'SET_QUESTIONS',
    };
};

export const changeLoading = value => {
    return {
        type: 'CHANGE_LOADING',
        loading: value
    };
};

export const changeCategory = event => {
    return {
        type: 'CHANGE_CATEGORY',
        value: event.target.value
    };
};

export const changeDifficulty = event => {
    return {
        type: 'CHANGE_DIFFICULTY',
        value: event.target.value
    };
};

export const changeType = event => {
    return {
        type: ' CHANGE_TYPE',
        value: event.target.value
    };
};

export const changeAmount = event => {
    return {
        type: 'CHANGE_AMOUNT',
        value: event.target.value
    };
};
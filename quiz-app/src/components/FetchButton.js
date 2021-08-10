import React, { connect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoading } from '../actions/quizActions';
import { setQuestions } from '../actions/quizActions';


function FetchButton(props) {
    const questionCategory = useSelector(state => state.options.question_category)
    const questionDifficulty = useSelector(state => state.options.question_difficulty)
    const questionType = useSelector(state => state.options.question_type)
    const questionAmount = useSelector(state => state.options.amount_of_questions)
    const dispatch = useDispatch()

    const setLoading = value => {
        dispatch(changeLoading());
    }

    const setQuestions = value => {
        dispatch(setQuestions());
    }

    const handleQuery = async () => {
        let apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}`;
        if (questionCategory.length) {
            apiUrl = apiUrl.concat(`&category=${questionCategory}`)
        }
        if (questionDifficulty.length) {
            apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`)
        }
        if (questionType.length) {
            apiUrl = apiUrl.concat(`&type=${questionType}`)
        } setLoading(true);
        await fetch(apiUrl)
            .then((res) => res.json())
            .then((response) => {
                setQuestions(response.results)
                setLoading(false);
            });
    }

    return <button onClick={() => handleQuery}>{props.text}</button>;
}

const mapDispatchToProps = {
    setLoading: () => (changeLoading()),
    setQuestions: () => (setQuestions()), 

}


export default connect(null, mapDispatchToProps)(FetchButton)

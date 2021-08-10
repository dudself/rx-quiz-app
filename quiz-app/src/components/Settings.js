import { React, useState, useEffect, Component } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import { changeLoading } from '../actions/quizActions';
import { changeCategory } from '../actions/quizActions';
import { changeDifficulty } from '../actions/quizActions';
import { changeType } from '../actions/quizActions';
import { changeAmount } from '../actions/quizActions';

const handleCategoryChange = () => (changeCategory)
const handleDifficultyChange = () => (changeDifficulty)
const handleTypeChange = () => (changeType)
const handleNumberOfQuestions = () => (changeAmount)

const mapDispatchToProps = (dispatch) => {
	return {
		//setting category change
		handleCategoryChange: event => dispatch(changeCategory(event)),


		//setting diff change
		handleDifficultyChange: event => dispatch(changeDifficulty(event)),

		//setting type change
		handleTypeChange: event => dispatch(changeType(event)),

		//setting amount change
		handleNumberOfQuestions: event => dispatch(changeAmount(event)),
	}
}

function Settings() {
	// option state hook
	const [options, setOptions] = useState(null);

	// loading state hook
	const loading = useSelector(state => state.options.loading)
	// category state hook
	const questionCategory = useSelector(state => state.options.question_category)
	// difficulty state hook
	const questionDifficulty = useSelector(state => state.options.question_difficulty)
	// type state hook
	const questionType = useSelector(state => state.options.question_type)
	// amount state hook
	const questionAmount = useSelector(state => state.options.amount_of_questions)

	// defining to dispatch the actions
	const dispatch = useDispatch(); //dispatch all

	// effect hook
	useEffect(() => {
		const apiUrl = `https://opentdb.com/api_category.php`;

		const handleLoadingChange = value => dispatch(changeLoading());

		handleLoadingChange(true);

		fetch(apiUrl)
			.then((res) => res.json())
			.then((response) => {
				handleLoadingChange(false);
				setOptions(response.trivia_categories);
			});
	}, [setOptions, dispatch]);
	return (
		<div>
			<div>
				<h2>Select Category:</h2>
				<select value={questionCategory} onChange=
					{(event) => handleCategoryChange(event)}>
					<option>All</option>
					{options &&
						options.map((option) => (
							<option value={option.id} key={option.id} >
								{option.name}
							</option>
						))}
				</select>
			</div>
			<div>
				<h2>Select Difficulty : </h2>
				<select value={questionDifficulty} onChange={(event) => handleDifficultyChange(event)}>
					<option value=" " key="difficulty-0">All</option>
					<option value="Easy" key="difficulty-1">Easy</option>
					<option value="Medium" key="difficulty-2">Medium</option>
					<option value="Hard" key="difficulty-3">Hard</option>
				</select>
			</div>

			<div>
				<h2>Select Question Type:</h2>
				<select value={questionType} onChange={handleTypeChange}>
					<option value="" key="type-0">All</option>
					<option value="Multiple" key="type-1">Multiple Choice</option>
					<option value="Boolean" key="type-2">True/False</option>
				</select>
			</div>

			<div>
				<h2>Amount of Questions:</h2>
				<input value={questionAmount} onChange={handleNumberOfQuestions} />
			</div>
		</div>

	);
};

export default connect(null, mapDispatchToProps)(Settings)


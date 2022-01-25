import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './QuestionView.css'
import { addPointsAC, decreasePointsAC } from '../../redux/actionCreators/pointsAC';
import { useParams } from 'react-router';


function QuestionView(props) {
  const { category, id } = useParams();
  const dispatch = useDispatch();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const quests = useSelector((state) => state.questions[category])

  const quest = quests.filter((question) => question.id === +id);
  const answer = quest[0].answer;

  const actionView = {
    type: 'DISABLE_BUTTON',
    payload: {
      id: quest[0].id,
      question: quest[0].question,
      answer: quest[0].answer,
      cost: quest[0].cost,
      category: quest[0].category,
      categoryName: quest[0].categoryName,
      visible: false,
    }
  }
  // const actionScore = {
  //   type: 'SUM_SCORE',
  //   payload: {
  //     score: Number(quest[0].cost),
  //   }
  // }

  const answerEvent = (event) => {
    event.preventDefault();

    if (event.target.input.value.toUpperCase()  === answer.toUpperCase() ) {
      setIsCorrect(true)
      dispatch(addPointsAC(quest[0].cost))
    } else{
      dispatch(decreasePointsAC(quest[0].cost))
    }

    setIsAnswered(true);

    dispatch(actionView);
  }

  return (
    <div>
      <p style={{ textAlign: "center", backgroundColor: "#222", margin:"5px 0", padding: "20px 0"}}>
        {quest[0].question}
      </p>

      <form className="answerForm" name='form' onSubmit={answerEvent}>
        <input name='input' type="text" />
        <button type='submit' disabled={isAnswered}>
          Ответить
        </button>
      </form>

      {
        isAnswered && (
          isCorrect
            ? <div className="div-biayte">
              <p>Красавчики! </p>
              <Link to='/' className="link link-return">Продолжить играть</Link>
            </div>
            : <div className="div-biayte">
              <p>Неверно! Правильный ответ: {answer}</p>
              <Link to='/' className="link link-return">Продолжить играть</Link>
            </div>


        )
      }

    </div>
  );
}

export default QuestionView;

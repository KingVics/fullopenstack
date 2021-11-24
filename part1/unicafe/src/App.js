import { useState } from 'react';
import Button from './Button';


const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}

const Statistics = ({feedback}) => {

  // check if feedbacks are empty
  if (feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={feedback.good} />
          <StatisticLine text="neutral" value={feedback.neutral} />
          <StatisticLine text="bad" value={feedback.bad} />
          <StatisticLine text="all" value={feedback.good + feedback.neutral + feedback.bad} />
          <StatisticLine text="average" value={(feedback.good - feedback.bad) / (feedback.good + feedback.neutral + feedback.bad)} />
          <StatisticLine text="positive" value={Math.round(feedback.good / (feedback.good + feedback.neutral + feedback.bad) * 100) + '%'} />
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 }) // initial state


  // functions to change state
  const handleGoodClick = () => { 
    setFeedback({
      ...feedback,
      good: feedback.good + 1 
    })
  }

  const handleNeutralClick = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1
    })
  }

  const handleBadClick = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1
    })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleGoodClick}/>
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <Statistics feedback={feedback}/>
    </div>
  );
}

export default App;

import {useState} from 'react';


function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [selected, setSelected] = useState(0) //default selected is 0 in the anecdotes array
  const [votevalue, setVoteValue] = useState({first: 0, second: 0, third: 0, fourth: 0, fifth: 0, sixth: 0, seventh: 0}) // set the default value of anecdotes to 0
  const voteValuesOnly = Object.values(votevalue); //convert object to array to easily pick there values
  const max = Math.max(...voteValuesOnly); //find the max value in the array
  
  const changeNumber = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length); //random number between 0 and the length of the array
    setSelected(randomNumber);    
  }

  const handleVote = () => {
    if(selected === 0){
      setVoteValue({
        ...votevalue,
        first: votevalue.first + 1
      })

    } else if(selected === 1){
      setVoteValue({
        ...votevalue,
        second: votevalue.second + 1
      })
    } else if(selected === 2){
      setVoteValue({
        ...votevalue,
        third: votevalue.third + 1
      })
    } else if(selected === 3){
      setVoteValue({
        ...votevalue,
        fourth: votevalue.fourth + 1
      })
    } else if(selected === 4){
      setVoteValue({
        ...votevalue,
        fifth: votevalue.fifth + 1
      })
    } else if(selected === 5){
      setVoteValue({
        ...votevalue,
        sixth: votevalue.sixth + 1
      })
    }
    else if(selected === 6){
      setVoteValue({
        ...votevalue,
        seventh: votevalue.seventh + 1
      })
    }
      
  }
    
  

  return (
    <div>
      {anecdotes[selected]}
      <div>
        <p>has {voteValuesOnly[selected]} votes</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={changeNumber}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {max === 0 ? "":
          <p>{anecdotes[voteValuesOnly.indexOf(max)]}</p>
        }
        
      </div>
    </div>
  );
}

export default App;

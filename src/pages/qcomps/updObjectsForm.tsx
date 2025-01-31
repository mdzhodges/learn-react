import { useState } from 'react';
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

/**
 * The component has a bug that 
 * prevents the state from being updated correctly.
 * Identify the bug and fix it.
 */
export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handleReset(){
    setPlayer({firstName: "", lastName: "", likescore: 0})
  }

  function handlePlusClick() {
    setPlayer({...player, likescore: player.likescore + 1});
  }

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
      <>
        <label>
          Like Score: <b>{player.likescore}</b>
          {'  '}
          <button onClick={handlePlusClick}>
            +1
          </button>
        </label>
        <label>
          First name:
          <input
              value={player.firstName}
              onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last name:
          <input
              value={player.lastName}
              onChange={handleLastNameChange}
          />
        </label>

        <label>
          {'  '}
          <button onClick={handleReset}>
              Reset
          </button>
        </label>

        <p>
          Score: {player.likescore} <br/>
          {player.firstName} {player.lastName}
        </p>
      </>
  );
}

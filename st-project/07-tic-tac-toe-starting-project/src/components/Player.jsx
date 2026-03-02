import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing((current) => !current); // instant toggle of edit mode
    onChangeName(symbol, playerName);
  };
  const handleCHange = (e) => {
    console.log(e.target);
    setPlayerName(e.target.value);
  };
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            className="player-name"
            type="text"
            required
            value={playerName}
            onChange={handleCHange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default function Log({ log }) {
  return (
    <ol id="log">
      {log.map((turn, index) => (
        <li key={index}>
          Player {turn.player} selected square ({turn.square.row},{' '}
          {turn.square.col})
        </li>
      ))}
    </ol>
  );
}

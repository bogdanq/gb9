export function Message({ message }) {
  return (
    <div>
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>12.03</p>
    </div>
  );
}

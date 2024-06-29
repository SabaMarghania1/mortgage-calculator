export default function Label({text, which}) {
  return (
    <label htmlFor={which} className="label">
      {text}
    </label>
  );
}

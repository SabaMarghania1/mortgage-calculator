export default function Header({dispatch, reset}) {
  const handleClear = () => {
    dispatch({
      type: 'CLEAR',
    });
    reset();
  };
  return (
    <header className="header">
      <h1>Mortgage Calculator</h1>
      <span role="button" onClick={handleClear}>
        Clear All
      </span>
    </header>
  );
}

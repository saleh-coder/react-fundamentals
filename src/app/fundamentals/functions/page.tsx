export default function Page() {
  function renderTitle() {
    return (
      <div>
        <h1>Título</h1>
        <h2>Subtítulo</h2>
      </div>
    );
  }

  function renderContent() {
    return (
      <ul>
        <li>Ana</li>
        <li>Carlos</li>
        <li>Zico</li>
      </ul>
    );
  }
  return (
    <div>
      {renderTitle()}
      <hr />
      {renderContent()}
    </div>
  );
}

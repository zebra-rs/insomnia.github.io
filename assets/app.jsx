/* App shell — owns theme state. */

const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [dark, setDark] = useStateApp(() => localStorage.getItem("i.dark") === "1");

  useEffectApp(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("i.dark", dark ? "1" : "0");
  }, [dark]);

  return (
    <main className="page">
      <button className="toggle" onClick={() => setDark(d => !d)}>{dark ? "Light" : "Dark"}</button>
      <h1>insomnia</h1>
      <p>Hello</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

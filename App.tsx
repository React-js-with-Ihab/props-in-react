import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Profile";

function App() {
  const firstArticle: string = `this is a long article
  it has many many blablabalbalbla`;
  const attOne = { name: "Omar", email: "example2@email.com", age: 31 };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Profile
        name="Ahmad"
        email="example@email.com"
        age={24}
        article="this is example one"
      />
      <Profile
        name="Ihab"
        email="example12@email.com"
        age={12}
        article={firstArticle}
      />
      <Profile
        name="Maher"
        email="example2e3@email.com"
        age={35}
        article={firstArticle}
      />
      <Profile {...attOne} />
      <Profile name="ss" email="exxammple" age={67}>
        <h5 style={{ color: "blue", boxShadow: "2px 2px 10px black" }}>
          This is a child
        </h5>
      </Profile>
    </>
  );
}

export default App;

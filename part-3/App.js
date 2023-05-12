const App = () => {
  return (
    <div>
      <Person
        name="Tyrone"
        age={33}
        hobbies={["playing", "training", "working"]}
      />
      <Person
        name="Baby"
        age={2}
        hobbies={["crying", "eating", "sleeping"]}
      />
      <Person
        name="Binyameen"
        age={25}
        hobbies={["forgetting initial commit", "forgetting formatting", "forgetting .gitignore"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

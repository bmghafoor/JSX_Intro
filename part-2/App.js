const App = () => {
  return (
    <div>
      <Tweet
        username="bmghafoor"
        name="Binyameen Ghafoor"
        message="Hi I hope you have a good day"
      />
      <Tweet
        username="terryj22"
        name="Tim Tebow"
        message="Hi I hope you have an okay day"
      />
      <Tweet
        username="goranDr2"
        name="James Jones"
        message="Hi I hope you have a bad day"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

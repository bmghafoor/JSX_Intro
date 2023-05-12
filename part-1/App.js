const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Tim Duncan" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))

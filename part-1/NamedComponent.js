const NamedComponent = (prop) => {
  return <p>My name is {prop.name}</p>;
};

ReactDOM.render(<NamedComponent name="Tim" />, document.getElementById("root"));

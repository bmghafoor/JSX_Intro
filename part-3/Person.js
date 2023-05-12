const Person = (prop) => {
  let reply;
  if (prop.age >= 18) {
    reply = "Eligible to Vote";
  } else {
    reply = "Cant vote yet";
  }

  let name = prop.name;
  if (name.length > 8) {
    name = name.substring(0, 6);
  }
  console.log(name)

  return (
    <div>
      <p>Learn some more information about {name}</p>
      <p>Voting Status: {reply}</p>
      <h3>Hobbies</h3>
      <ul>
        {prop.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};

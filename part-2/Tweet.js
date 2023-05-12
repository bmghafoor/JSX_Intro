const Tweet = (prop) => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
    <div>
      <p>{prop.username}</p>
      <p>{prop.name}</p>
      <p>{currentDate}</p>
      <p>{prop.message}</p>
    </div>
  );
};

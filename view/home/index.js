import React, { useState } from "react";
const Home = ({ display, users }) => {
  const [dd, setDD] = useState(null);
  users.then((response) => setDD(response));
  console.log(dd);
  return (
    <>
      <h1>Home Page {display}</h1>
    </>
  );
};
export default Home;

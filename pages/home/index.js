import React from "react";
import Home from "../../view/home";

const Index = () => {
  const data = getUserData();
  return <Home users={data} />;
};

// export async function getServerSideProps() {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const data = await response.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

async function getUserData() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default Index;

import React from 'react'

export default function PageTitle(props) {
  console.log(props);
  return (
    <h1 className="text-3xl font-primary font-extrabold text-center text-primary dark:text-light mt-4 py-2">{props.title}</h1>
  );
}

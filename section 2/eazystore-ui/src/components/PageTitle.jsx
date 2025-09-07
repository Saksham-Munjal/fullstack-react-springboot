import React from 'react'

export default function PageTitle(props) {
  console.log(props);
  return (
    <h1 className='page-title'>{props.title}</h1>
  );
}

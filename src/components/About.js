import React from "react";
import Links from './Links'

// function Links(props) {
//   return (
//     <div>
//       <h3>Links</h3>
//       <a href={props.github}>{props.github}</a>
//       <a href={props.linkedIn}>{props.linkedIn}</a>
//     </div>
//   )
// }

function About(props) {
  return (
    <div id="about">
      <h2>About</h2>
      { props.bio !== undefined && props.bio !== '' ? <p>{props.bio}</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links github={props.github} linkedin={props.linkedin}/>}
    </div>
  );
}

export default About;

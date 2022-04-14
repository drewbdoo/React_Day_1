//Exercise 1.1

// import React from "react";

// const App = () => {
//   const Header = (props) => {
//     return <h1>{props.course}</h1>;
//   };
//   const Content = (props) => {
//     return (
//       <p>
//         {props.name} {props.total}
//       </p>
//     );
//   };
//   const Total = (props) => {
//     return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
//   };
//   const course = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;

//   return (
//     <div>
//       <Header course={course} />
//       <Content name={part1} total={exercises1} />
//       <Content name={part2} total={exercises2} />
//       <Content name={part3} total={exercises3} />

//       <Total />
//     </div>
//   );
// };

// export default App;


///Exercise 1.2
import React from "react";

const App = () => {
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Part = (props) => {
    return(
      <p>{props.part} {props.total}</p>
      )
  };

const Content = () => {
  return(
    <div>
      <Part part={part1} total={exercises1}/>
      <Part part={part2} total={exercises2}/>
      <Part part={part3} total={exercises3}/>
    </div>
  )
}
  const Total = (props) => {
    return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
  };
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
     <Content/>

      <Total />
    </div>
  );
};

export default App;



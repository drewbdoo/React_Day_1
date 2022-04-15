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

// import React from "react";
// const App = () => {
//   const Header = (props) => {
//     return <h1>{props.course}</h1>;
//   };
//   const Part = (props) => {
//     return(
//       <p>{props.part} {props.total}</p>
//       )
//   };
// const Content = () => {
//   return(
//     <div>
//       <Part part={part1} total={exercises1}/>
//       <Part part={part2} total={exercises2}/>
//       <Part part={part3} total={exercises3}/>
//     </div>
//   )
// }
//   const Total = () => {
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
//      <Header course={course} />
//      <Content/>
//      <Total />
//     </div>
//   );
// };
// export default App;



// Exercise 1.3

// import React from "react";
// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// };
// const App = () => {
//   const Part = (props) => {
//     return (
//       <p>
//         {props.name} {props.exercises}
//       </p>
//     )
//   }
//   const Content = () => {
//     return (
//       <div>
//        <Part name={part1.name} exercises={part1.exercises} />
//        <Part name={part2.name} exercises={part2.exercises} />
//        <Part name={part3.name} exercises={part3.exercises} />
//       </div>
//     )
//   }
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }
//   const Total = () => {
//   return <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>;
// };
//   return (
//     <div>
//       <Header course={course} />
//       <Content />
//       <Total />
//     </div>
//   );
// };
// export default App;



//Exercise 1.4

// import React from "react";
// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// };
// const Part = (props) => {
//   return (
//     <p>
//       {props.name} {props.excercises}
//     </p>
//   );
// };
// const Content = (props) => {
//   return (
//     <div>
//       <Part name={props.parts[0].name} excercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} excercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} excercises={props.parts[2].exercises} />
//     </div>
//   );
// };
// const Total = (props) => {
//   return (
//     <p>
//       Number of excercises{" "}
//       {props.parts[0].exercises +
//         props.parts[1].exercises +
//         props.parts[2].exercises}
//     </p>
//   );
// };
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   );
// };
// export default App;



//Exervice 1.5

// import React from "react";
// const Header = (props) => {
//   return <h1>{props.course.name}</h1>;
// };
// const Part = (props) => {
//   return (
//     <p>
//       {props.name} {props.excercises}
//     </p>
//   );
// };
// const Content = (props) => {
//   return (
//     <div>
//       <Part name={props.parts[0].name} excercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} excercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} excercises={props.parts[2].exercises} />
//     </div>
//   );
// };
// const Total = (props) => {
//   return (
//     <p>
//       Number of excercises{" "}
//       {props.parts[0].exercises +
//         props.parts[1].exercises +
//         props.parts[2].exercises}
//     </p>
//   );
// };
// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };
//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   );
// };
// export default App;



//Exercise 1.6

// import { useState } from 'react'
// const App = () => {
//   const Header = () => <h1>give feedback</h1>
//   const Stats = (props) => {
//     return (
//       <div>
//         <tr>
//           <td>{props.name}</td>
//           <td>{props.num}</td>
//         </tr>
//       </div>
//     );
//   };
//   const Statistics = () => {
//     return (
//       <div>
//         <h1>statistics</h1>
//         <tbody>
//           <Stats name="good" num={good} />
//           <Stats name="neutral" num={neutral} />
//           <Stats name="bad" num={bad} />
//         </tbody>
//       </div>
//     )
//   }
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   return (
//     <div>
//       <Header />
//       <button onClick={() => setGood(good + 1)}>good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
//       <button onClick={() => setBad(bad + 1)}>bad</button>
//       <Statistics />
//     </div>
//   )
// }
// export default App



//Exercise 1.7 and 1.8 kinda mixed together, 1.9, 1.10. and 1.11 are comment on the lines where they were added

import { useState } from 'react'

//Exercise 1.10
const StatisticLine = (props) => {
  return (
    //Exercise 1.11
    <tr>
      <td>{props.name}</td>
      <td>{props.num}</td>
    </tr>
  );
};
const Statistics = (props) => {
  //Exercise 1.9
  if (props.total === 0) {
    return (<p>No feedback given</p>)
  }
  return (
    <div>
      <h1>statistics</h1>
      {/* Exercise 1.11 cont. */}
      <table>
        <tbody>

          <StatisticLine name="good " num={props.good} />
          <StatisticLine name="neutral " num={props.neutral} />
          <StatisticLine name="bad " num={props.bad} />
          <StatisticLine name="all" num={props.total} />
          <StatisticLine name="average" num={props.average} />
          <StatisticLine name="positive" num={props.positive} />
        </tbody>
      </table>
    </div>
  )
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const App = () => {
  const Header = () => <h1>give feedback</h1>
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = () => {
    let ave = (good - bad)
    let overAll = (ave / total)
    return overAll;
  }
  const positive = () => {
    return (100 * good / total);

  }
  const statProps = {
    good: good,
    bad: bad,
    neutral: neutral,
    total: total,
    average: average(),
    positive: positive(),
  }
  const handleGoodClick = () =>
    setGood(good + 1)
  const handleNeutralClick = () =>
    setNeutral(neutral + 1)
  const handleBadClick = () =>
    setBad(bad + 1)
  return (
    <div>
      <Header />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics {...statProps} />
    </div>
  )
}
export default App
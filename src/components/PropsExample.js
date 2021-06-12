import React from "react";

// functional component with hooks
const PropsExample = (props) => {
  return (
    <div className="Counter">
      <h1>{props.children}</h1>
      <div>{props.items}</div>
      <img src={props.avatar} alt="kitty" />
    </div>
  );
};

// // // class-based component
// class Block1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   IncrementItem = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   DecrementItem = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <div>{this.props.items}</div>
//         <img src={this.props.avatar} alt="kitty" />
//         <div>{this.state.count}</div>
//         <button onClick={this.IncrementItem}>Increment</button>
//         <button onClick={this.DecrementItem}>Decrement</button>
//       </div>
//     );
//   }
// }

export default PropsExample;

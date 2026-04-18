import React from "react";

class ComponentMountPhase extends React.Component {
  // 1. Initialize state in the constructor  
  consttructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    // 2. update state based on changes in props
    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps called');
      return null;
    }
  
    // 4. API calls or subscriptions can be made here
    componentDidMount() {
      console.log('componentDidMount called');
    }
  
    incrementCount = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    };
  
    // 3. render method to display the UI
    render() {
      console.log('render called');
      return (
        <div>
          <h1>Counter App</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
  }
  
export default ComponentMountPhase;

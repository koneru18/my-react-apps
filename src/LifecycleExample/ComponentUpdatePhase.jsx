import React from "react";

class ComponentUpdatePhase extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'John',
        changed: false
      };
      console.log('Constructor called');
    }
  
    // 1. Update state based on changes in props
    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps called');
      return null;
    }
  
    // 2. Decide whether to re-render the component. Return false to prevent re-rendering.
    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate called');
      return true;
    }

    // 3. Capture some information (like scroll position) before the DOM is updated
    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('getSnapshotBeforeUpdate called');
        return null;
    }
  
    // 5. Perform side effects after the component has updated
    componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate called');
    }
  
    changeName = () => {
      this.setState({
        name: 'Jane',
        changed:true
      });
    };
  
    // 4. render method to display the UI
    render() {
      console.log('render called');
      return (
        <div>
          <h1>Updating Example</h1>
          <div>Name {this.state.changed ? <h3>{this.state.name}</h3>: <p>{this.state.name}</p>}</div>
          <button onClick={this.changeName}>Change Name</button>
        </div>
      );
    }
  }

export default ComponentUpdatePhase
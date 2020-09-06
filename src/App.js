import React from 'react';

class App extends React.Component{
  state = {
      isLoading : true,
      movies: []
  };
  componentDidMount() {
      setTimeout(() => {
          this.setState({isLoading: false});
      }, 6000);
  }
//   componentDidMount() {
//       console.log("component rendered");
//   }
//   componentDidUpdate() {
//       console.log("I just updated")
//   }
//   componentWillUnmount() {
//       console.log("Good bye")
//   }
  render() {
    const {isLoading} = this.state;
  return <div>
      {this.state.isLoading ? "Loading..." : "We are ready"}
  </div>
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}! </h1>;
  }
}

class App extends React.Component {
  render() {
    const users = [
      {id: 'leia', name: 'Leia'},
      {id: 'luke', name: 'Luke'},
      {id: 'han', name: 'Han'}
    ];
    return(
      <div>
        {users.map(user => <Hello key={user.id} name={user.name} />)}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

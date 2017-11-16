import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './component/navbar';
import ContactContainer from './component/contact-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    //we could think about putting state in here like
    // this.state = { something}
    this.getApp = this.getApp.bind(this);
  }

  componentDidMount() {
    console.log('Checking that state mounted. Here is the state: ', this.state);
  }

//Possibly could delete this: Keeping in case I think of some stateful stuff to manage
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <section>
            <Navbar />
            <main>
              <Route exact path="/" component={() => <ContactContainer/>} />
            </main>
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));

import React from 'react';

class ProjectsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {

    //API call to GH//
    fetch('I have to figure out what to put in here')
      .then(results => {
        return results.json();
    //referencing this website: https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2//
      })
      this.setState({repos});
      console.log('state', this.state.repos);
  }

  render() {
    return (
      <div className='repos'>
        {this.state.repos}
      </div>
    );
  }
}

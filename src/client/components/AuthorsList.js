import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../apollo/queries/fetchAuthors';

class AuthorsList extends Component {
  renderAuthors() {
    console.log(this.props.data);
    return this.props.data.authors.map(args => {
      console.log(args);
      return (
        <li key={args.id}>
          {args.name}
        </li>
      )
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading..</div>; }

    return (
      <div>
        <ul>
          {this.renderAuthors()}
        </ul>
      </div>
    );
  }
}

export default graphql(query)(AuthorsList);
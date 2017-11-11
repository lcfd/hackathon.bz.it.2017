import React, { Component } from 'react';

class PageHeader extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <h2>{this.props.main}</h2>
        {this.props.sub ? <h1>{this.props.sub}</h1> : null}
      </div>
    );
  }
}

export default PageHeader;

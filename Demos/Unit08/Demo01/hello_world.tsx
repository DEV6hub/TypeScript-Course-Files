/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/modules/react-dom/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare var mountNode: any;

interface HelloWorldProps {
  name: string;
}

let HelloMessage: React.ClassicComponentClass<HelloWorldProps> = React.createClass<HelloWorldProps, any>({
  render: function(): JSX.Element {
    return <div>Hello {this.props.name}</div>;
  }
});


ReactDOM.render(<HelloMessage name="John"/>, mountNode);

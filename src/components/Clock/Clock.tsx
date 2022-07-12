import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state: State = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.startTimer, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startTimer = () => {
    const date = new Date();

    this.setState({ date });

    // eslint-disable-next-line no-console
    console.log(date.toLocaleTimeString());
  };

  render() {
    return (
      <div className="clock">
        <strong>{this.props.name}</strong>
        {' time is '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

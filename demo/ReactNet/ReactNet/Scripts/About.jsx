var About = React.createClass({
  render: function () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.message}</h3>
        <p>Use this area to provide additional information.</p>
      </div>
    );
  }
});

var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
//^^^^^^ e being short for event in "onFormSubmit"'s function argument'

      e.preventDefault();
//^^^^^^ "preventDefault" keeps the browser from refreshing, that is handled internally
    var updates {};
    var name = this.refs.name.value;

    if (name.length > 0) {
//    ^^^  this makes sure input isn't blank
      this.refs.name.value = '';
      updates.name = name;
//    ^^^  if input is valid, this is where the input is collected
      this.props.onNewName(updates);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
},
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Sean';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);

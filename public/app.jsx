var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

//Right here ^^

    var name = this.refs.name.value;

    alert(name);
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

//Create a form just like any other language.
//Basic HTML with "two quirks".
//One, onSubmit attribute,which is built into react
//Two, the preventDefault above at the comment block
//above this one.

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Sean';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);

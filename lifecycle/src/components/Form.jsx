import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      globalTitle: "Change that title"
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({ globalTitle: this.state.title });
  }

  componentDidMount() {
    console.log("Formulaire rendu");
  }

  render() {
    return (
      <div className="Form">
        <h1>{this.state.globalTitle}</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="title">title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    console.log("Titre modifié");
  }
}

export default Form;

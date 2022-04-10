import React, { Component } from "react";

class FormError extends Component {
  render() {
    const { formError } = this.props;
    return (
      <section className="container-error">
        {
          Object.keys(formError).filter((objectKey) => (
            formError[objectKey].length > 0
          )).map((element, index) => (
            <p key={ index }>{`${element} ${formError[element]}`}</p>
          ))
        }
      </section>
    );
  }
}

export default FormError;

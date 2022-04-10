import React from "react";
import PersonalForm from "./PersonalForm";
import ProfessionalForm from "./ProfessionalForm";

class Forms extends React.Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler, updateCount, count, objectValue } = this.props;
    return (
      <>
        <form className="forms">
          <PersonalForm
            changeHandler={ changeHandler }
            onBlurHandler= { onBlurHandler }
            currentState= { currentState }
            objectValue = { objectValue }
          />
          <ProfessionalForm 
            changeHandler={ changeHandler } 
            count = { count }
            updateCount = { updateCount }
            objectValue = { objectValue }
          />
        </form>
        <section className="button-container">
          <input 
            type="button"
            value="Enviar"
            onClick={ sendForm }
          />
          <input 
            type="button"
            value="Limpar"
            onClick={ resetForm }
          />
        </section>
      </>
      
    );
  }
}

export default Forms;

// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !isValidFirstName})
  }

  renderFirstName = () => {
    const {firstName, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'input-field error-field'
      : 'input-field'

    return (
      <div className="input-container">
        <label className="label" htmlFor="fn">
          FIRST NAME
        </label>
        <input
          className={className}
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          id="fn"
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError: !isValidLastName})
  }

  renderLastName = () => {
    const {lastName, showLastNameError} = this.state
    const className = showLastNameError
      ? 'input-field error-field'
      : 'input-field'

    return (
      <div className="input-container">
        <label className="label" htmlFor="ln">
          LAST NAME
        </label>
        <input
          className={className}
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          id="ln"
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="login-container" onSubmit={this.onSubmitForm}>
        <div className="first-container">
          {this.renderFirstName()}
          {showFirstNameError && <p className="error-msg">Required</p>}
        </div>
        <div className="last-container">
          {this.renderLastName()}
          {showLastNameError && <p className="error-msg">Required</p>}
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="para">Submitted Successfully</p>
      <button
        className="submit-btn"
        type="button"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

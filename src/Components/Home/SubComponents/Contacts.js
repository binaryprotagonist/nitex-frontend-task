import React, { Component } from "react";
import axios from "axios";
import {BaseUrl} from "../../../BaseUrl";

  export default class Contacts extends Component {
    constructor(){
      super()
      this.state={

      }
    }

    handleonInput = (event) => {
      this.setState({ [event.target.name]: event.target.value }, () => {
          console.log("newnAME ", this.state.fullname, this.state.shortname)
      })
  }
   onsubmit = (event) => {
      event.preventDefault()
    let data = {
      email: this.state.email,
      represent:this.state.gridRadios,
      fullName: this.state.name,
      organisation: this.state.organisation,
      phoneNamber: this.state.number,
      message:this.state.message,
    };

    axios
      .post(BaseUrl + "/email",data)
      .then((res) => {
        console.log("test", res);
      alert(res.data.msg)
      })
      .catch((error) => {
        console.log("huss", error);
      });
  };
  render(){
  return (
    <div>
      <form className="mt-5">
        <fieldset className="form-group">
          <div className="row">
            <div className="col-sm-3" />
            <legend className="col-form-label col-sm-2 pt-0">
              You represent*
            </legend>
            <div className="col-sm-4 d-flex radio-background">
              <div className="form-check">
                <input
                  onChange={this.handleonInput}
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Yourself
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={this.handleonInput}
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  NGO
                </label>
              </div>
              <div className="form-check">
                <input
                  onChange={this.handleonInput}
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Company
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <div className="col-sm-3" />
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            full name*
          </label>
          <div className="col-sm-4">
            <input
              onChange={this.handleonInput}
              type="name"
              className="form-control"
              id="name"
              name="name"
              placeholder
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-3" />
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            organisation*
          </label>
          <div className="col-sm-4">
            <input
              onChange={this.handleonInput}
              type="text"
              className="form-control"
              id="organisation"
              name="organisation"
              placeholder
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-3" />
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            email
          </label>
          <div className="col-sm-4">
            <input
              onChange={this.handleonInput}
              type="email"
              className="form-control"
              id="inputEmail3"
              name="inputEmail3"
              placeholder
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-3" />
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            phone number
          </label>
          <div className="col-sm-4">
            <input
              onChange={this.handleonInput}
              type="number"
              className="form-control"
              id="number"
              name="number"
              placeholder
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-3" />
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            message
          </label>
          <div className="col-sm-4">
            <input
              onChange={this.handleonInput}
              type="text"
              className="form-control"
              id="message"
              name="message"
              placeholder
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-3" />
          <div className="col-sm-2" />
          <div className="col-sm-5">
            <div className="form-check">
              <input
                onChange={this.handleonInput}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                I agree to be contacted by Trustloop e.V
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-3" />
          <div className="col-sm-3" />
          <div className="col-sm-5">
            <button
              onClick={this.onsubmit}
              type="submit"
              className="submit-button landing-button"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
  }


import React from "react";
import Button from "./Button";

const GroupForm = () => {
  let loginInput, form;
  // console.log(this)
  const submitGroupForm = event => {
    event.preventDefault();
    console.log(loginInput.value);
    form.reset();
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        className="w-50 my-4"
        onSubmit={submitGroupForm}
        ref={node => (form = node)}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="login"
            ref={node => (loginInput = node)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <Button classN="btn btn-primary" text={"Submit"} type={"submit"} />
      </form>
    </div>
  );
};

export default GroupForm;

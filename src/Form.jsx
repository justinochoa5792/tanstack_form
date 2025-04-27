import React from "react";
import { useForm } from "@tanstack/react-form";

const Form = () => {
  const validateForm = useForm({
    defaultValues: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      age: 0,
      birthDate: "",
      isMarried: false,
      nationality: "american",
      password: "",
      confirmPassword: "",
    },
    onSubmit: ({ value }) => {
      console.log(JSON.stringify(value, null, 2));
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validateForm.handleSubmit();
        }}
      >
        {/* Username */}
        <validateForm.Field
          name="username"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === "" ? "Username is required" : undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        {/* Email */}
        <validateForm.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              return !emailRegex.test(value)
                ? "Valid Email is required"
                : undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        {/* First Name */}
        <validateForm.Field
          name="firstName"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === "" ? "First Name is required" : undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        {/* Last Name */}
        <validateForm.Field
          name="lastName"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === "" ? "Last Name is required" : undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        {/* Age */}
        <validateForm.Field
          name="age"
          validators={{
            onChange: ({ value }) => {
              return value < 18 ? "Must be 18 or older" : undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.valueAsNumber)}
              />
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        {/* Birthdate */}
        <validateForm.Field
          name="birthDate"
          validators={{
            onChange: ({ value }) => {
              return value.trim() === "" ? "Birthdate is required" : undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="birthDate">Birthdate:</label>
              <input
                type="date"
                id="birthDate"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        {/* Is Married */}
        <validateForm.Field
          name="isMarried"
          validators={{
            onChange: ({ value }) => {
              return undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="isMarried">
                <input
                  type="checkbox"
                  id="isMarried"
                  checked={field.state.value}
                  onChange={(e) => field.handleChange(e.target.checked)}
                />
                Are you married?
              </label>
            </div>
          )}
        </validateForm.Field>
        {/*Nationality */}
        <validateForm.Field name="nationality">
          {(field) => (
            <div>
              <label htmlFor="nationality">Nationality:</label>
              <select
                id="nationality"
                value={field.state.value ?? ""}
                onChange={(e) => field.handleChange(e.target.value)}
              >
                <option value="american">American</option>
                <option value="canadian">Canadian</option>
                <option value="european">European</option>
              </select>
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        {/* Password */}
        <validateForm.Field
          name="password"
          validators={{
            onChange: ({ value }) => {
              return value.length < 8
                ? "Password must be at least 8 characters"
                : undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        {/* confirm password */}
        <validateForm.Field
          name="confirmPassword"
          validators={{
            onChangeListenTo: ["password"],
            onChange: ({ value, fieldApi }) => {
              return value !== fieldApi.form.getFieldValue("password")
                ? "Passwords do not match"
                : undefined
                ? "Password must be at least 8 characters"
                : undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors.length > 0 && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </div>
          )}
        </validateForm.Field>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;

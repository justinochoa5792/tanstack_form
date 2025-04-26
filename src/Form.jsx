import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    age: 0,
    birthDate: "",
    isMarried: false,
    nationality: "American",
    password: "",
    confirmPassword: "",
  });

  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* First Name */}
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        {/* Age */}
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        {/* Birthdate */}
        <div>
          <label htmlFor="lastName">Birthdate:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        {/* Is Married */}
        <div>
          <label htmlFor="isMarried">
            <input
              type="checkbox"
              id="isMarried"
              name="isMarried"
              value={formData.isMarried}
              onChange={handleChange}
            />
            Are you married?
          </label>
        </div>
        {/*Nationality */}
        <div>
          <label htmlFor="nationality">Nationality:</label>
          <select
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          >
            <option value="american">American</option>
            <option value="canadian">Canadian</option>
            <option value="european">European</option>
          </select>
        </div>
        {/* Password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* confirm password */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;

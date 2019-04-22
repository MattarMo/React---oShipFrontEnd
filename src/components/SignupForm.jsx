import React from 'react';
import { Formik } from 'formik';
//import Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
        streetNumber: '',
        streetName: '',
        city: ''
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      render={({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
      }) => (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" style={{ display: 'block' }}>
              Username
            </label>
            <input
              name="username"
              placeholder="Enter your username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.username && touched.username
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.username && touched.username && (
              <div className="input-feedback">{errors.username}</div>
            )}
            <label htmlFor="password" style={{ display: 'block' }}>
              Password
            </label>
            <input
              name="password"
              placeholder="Enter your password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <label htmlFor="email" style={{ display: 'block' }}>
              Email
            </label>
            <input
              name="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="streetNumber" style={{ display: 'block' }}>
              Street Number
            </label>
            <input
              name="streetNumber"
              placeholder="Enter your streetNumber"
              type="number"
              value={values.streetNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.streetNumber && touched.streetNumber
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.streetNumber && touched.streetNumber && (
              <div className="input-feedback">{errors.streetNumber}</div>
            )}
            <label htmlFor="streetName" style={{ display: 'block' }}>
              Street Name
            </label>
            <input
              name="streetName"
              placeholder="Enter your streetName"
              type="text"
              value={values.streetName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.streetName && touched.streetName
                  ? 'text-input error'
                  : 'text-input'
              }
            />
            {errors.streetName && touched.streetName && (
              <div className="input-feedback">{errors.streetName}</div>
            )}
            <label htmlFor="city" style={{ display: 'block' }}>
              City
            </label>
            <input
              name="city"
              placeholder="Enter your city"
              type="text"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.city && touched.city ? 'text-input error' : 'text-input'
              }
            />
            {errors.city && touched.city && (
              <div className="input-feedback">{errors.city}</div>
            )}
            <br />
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Signup
            </button>
          </form>
        </div>
      )}
    />
  );
};

export default SignupForm;

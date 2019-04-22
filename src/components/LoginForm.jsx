import React from 'react';
import { Formik } from 'formik';
//import Yup from 'yup';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
        <form onSubmit={handleSubmit}>
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
              errors.email && touched.email ? 'text-input error' : 'text-input'
            }
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
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
          <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      )}
    />
  );
};

export default LoginForm;

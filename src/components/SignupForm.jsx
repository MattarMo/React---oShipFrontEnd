import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/form.css';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  streetNumber: Yup.number()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  streetName: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  city: Yup.string().required('Required')
});

const initialState = {
  username: '',
  password: '',
  email: '',
  streetNumber: '',
  streetName: '',
  city: ''
};

const SignupForm = () => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 5000);
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
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign Up</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-label-group">
                      <input
                        name="username"
                        placeholder="Enter your username"
                        type="text"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="username">Username</label>
                      {errors.username && touched.username && (
                        <div className="input-feedback text-danger">
                          {errors.username}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="password">Password</label>
                      {errors.email && touched.email && (
                        <div className="input-feedback text-danger">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="email"
                        placeholder="Enter your email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="email">Email</label>
                      {errors.email && touched.email && (
                        <div className="input-feedback text-danger">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="streetNumber"
                        placeholder="Enter your streetNumber"
                        type="number"
                        value={values.streetNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="streetNumber">Street Number</label>
                      {errors.streetNumber && touched.streetNumber && (
                        <div className="input-feedback text-danger">
                          {errors.streetNumber}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="streetName"
                        placeholder="Enter your streetName"
                        type="text"
                        value={values.streetName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="streetName">Street Name</label>
                      {errors.streetName && touched.streetName && (
                        <div className="input-feedback text-danger">
                          {errors.streetName}
                        </div>
                      )}
                    </div>

                    <div className="form-label-group">
                      <input
                        name="city"
                        placeholder="Enter your city"
                        type="text"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="city">City</label>
                      {errors.city && touched.city && (
                        <div className="input-feedback text-danger">
                          {errors.city}
                        </div>
                      )}
                    </div>
                    <br />
                    {!isSubmitting ? (
                      <>
                        <button
                          className="btn btn-lg btn-success btn-block text-uppercase"
                          type="submit"
                        >
                          Login
                        </button>
                        <button
                          type="button"
                          className="btn btn-lg btn-success btn-block text-uppercase"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-lg btn-success btn-block text-uppercase"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-md float-left"
                          role="status"
                          aria-hidden="true"
                        />
                        Signing up
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default SignupForm;

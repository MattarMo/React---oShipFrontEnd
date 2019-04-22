import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/form.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
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

        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Login</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-label-group">
                      <input
                        name="email"
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
                        name="password"
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
                    <br />
                    <button
                      className="btn btn-lg btn-success btn-block text-uppercase"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Login
                    </button>
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

export default LoginForm;

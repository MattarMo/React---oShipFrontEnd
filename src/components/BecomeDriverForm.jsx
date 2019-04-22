import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/form.css';

const BecomeDriverFormSchema = Yup.object().shape({
  driversLicense: Yup.string().required('Required'),
  carMake: Yup.string().required('Required'),
  carModel: Yup.string().required('Required'),
  carYear: Yup.string().required('Required'),
  carColor: Yup.string().required('Required'),
  carLicensePlate: Yup.string().required('Required')
});

const BecomeDriverForm = () => {
  return (
    <Formik
      initialValues={{
        driversLicense: '',
        carMake: '',
        carModel: '',
        carYear: '',
        carColor: '',
        carLicensePlate: ''
      }}
      validationSchema={BecomeDriverFormSchema}
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
                  <h5 className="card-title text-center">Become a Driver</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-label-group">
                      <input
                        name="driversLicense"
                        type="text"
                        value={values.driversLicense}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="driversLicense">Drivers License</label>
                      {errors.driversLicense && touched.driversLicense && (
                        <div className="input-feedback text-danger">
                          {errors.driversLicense}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="carMake"
                        type="text"
                        value={values.carMake}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="carMake">Car Make</label>
                      {errors.carMake && touched.carMake && (
                        <div className="input-feedback text-danger">
                          {errors.carMake}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="carModel"
                        type="text"
                        value={values.carModel}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="carModel">Car Model</label>
                      {errors.carModel && touched.carModel && (
                        <div className="input-feedback text-danger">
                          {errors.carModel}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="carYear"
                        type="text"
                        value={values.carYear}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="carYear">Car Year</label>
                      {errors.carYear && touched.carYear && (
                        <div className="input-feedback text-danger">
                          {errors.carYear}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="carColor"
                        type="text"
                        value={values.carColor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />
                      <label htmlFor="carColor">Car Color</label>
                      {errors.carColor && touched.carColor && (
                        <div className="input-feedback text-danger">
                          {errors.carColor}
                        </div>
                      )}
                    </div>
                    <div className="form-label-group">
                      <input
                        name="carLicensePlate"
                        type="text"
                        value={values.carLicensePlate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                      />

                      <label htmlFor="carLicensePlate">Car License Plate</label>
                      {errors.carLicensePlate && touched.carLicensePlate && (
                        <div className="input-feedback text-danger">
                          {errors.carLicensePlate}
                        </div>
                      )}
                    </div>
                    <br />
                    <button
                      className="btn btn-lg btn-success btn-block text-uppercase"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Become Driver
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

export default BecomeDriverForm;

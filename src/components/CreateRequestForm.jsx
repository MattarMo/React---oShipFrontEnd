import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/form.css';

const CreateRequestFormSchema = Yup.object().shape({
  pickupStreetNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  pickupStreetName: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  pickupCity: Yup.string()
    .email('Invalid email')
    .required('Required'),
  pickupZipcode: Yup.number()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  pickupInstructions: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  dropoffStreetNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  dropoffStreetName: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  dropoffCity: Yup.string()
    .email('Invalid email')
    .required('Required'),
  dropoffZipcode: Yup.number()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  dropoffInstructions: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

const CreateRequestForm = () => {
  return (
    <Formik
      initialValues={{
        pickupStreetNumber: '',
        pickupStreetName: '',
        pickupCity: '',
        pickupZipcode: '',
        pickupInstructions: '',
        dropoffStreetNumber: '',
        dropoffStreetName: '',
        dropoffCity: '',
        dropoffZipcode: '',
        dropoffInstructions: ''
      }}
      validationSchema={CreateRequestFormSchema}
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
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Create Request</h5>
                  <form className="form-signin" onSubmit={handleSubmit}>
                    <table>
                      <tr>
                        <th>
                          <h4>Pickup</h4>
                        </th>
                        <td colSpan="2" className="form-label-group" />
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group">
                          <input
                            name="pickupStreetNumber"
                            placeholder="street Number"
                            type="number"
                            value={values.pickupStreetNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="username">Steet Number</label>
                          {errors.pickupStreetNumber &&
                            touched.pickupStreetNumber && (
                              <div className="input-feedback text-danger">
                                {errors.pickupStreetNumber}
                              </div>
                            )}
                        </td>
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group" colSpan="2">
                          <input
                            name="pickupStreetName"
                            placeholder="Street Name"
                            type="text"
                            value={values.pickupStreetName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="streetName">Street Name</label>
                          {errors.pickupStreetName &&
                            touched.pickupStreetName && (
                              <div className="input-feedback text-danger">
                                {errors.pickupStreetName}
                              </div>
                            )}
                        </td>
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group">
                          <input
                            name="pickupCity"
                            placeholder="City"
                            type="text"
                            value={values.pickupCity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="email">City</label>
                          {errors.pickupCity && touched.pickupCity && (
                            <div className="input-feedback text-danger">
                              {errors.pickupCity}
                            </div>
                          )}
                        </td>
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group">
                          <input
                            name="pickupZipcode"
                            placeholder="Enter your streetNumber"
                            type="number"
                            value={values.pickupZipcode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="streetNumber">Zipcode</label>
                          {errors.pickupZipcode && touched.pickupZipcode && (
                            <div className="input-feedback text-danger">
                              {errors.pickupZipcode}
                            </div>
                          )}
                        </td>
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group" colSpan="3">
                          <input
                            name="pickupInstructions"
                            placeholder="Instructions"
                            type="text"
                            value={values.pickupInstructions}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="streetName">Instructions</label>
                          {errors.pickupInstructions &&
                            touched.pickupInstructions && (
                              <div className="input-feedback text-danger">
                                {errors.pickupInstructions}
                              </div>
                            )}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <h4>Drop Off</h4>
                        </th>
                        <td colSpan="2" className="form-label-group" />
                      </tr>
                      <tr />
                      <td colSpan="2" className="form-label-group" />

                      <tr />
                      <tr>
                        <td className="form-label-group">
                          <input
                            name="pickupStreetNumber"
                            placeholder="street Number"
                            type="number"
                            value={values.pickupStreetNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="username">Steet Number</label>
                          {errors.pickupStreetNumber &&
                            touched.pickupStreetNumber && (
                              <div className="input-feedback text-danger">
                                {errors.pickupStreetNumber}
                              </div>
                            )}
                        </td>
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group" colSpan="2">
                          <input
                            name="pickupStreetName"
                            placeholder="Street Name"
                            type="text"
                            value={values.pickupStreetName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="streetName">Street Name</label>
                          {errors.pickupStreetName &&
                            touched.pickupStreetName && (
                              <div className="input-feedback text-danger">
                                {errors.pickupStreetName}
                              </div>
                            )}
                        </td>
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group">
                          <input
                            name="pickupCity"
                            placeholder="City"
                            type="text"
                            value={values.pickupCity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="email">City</label>
                          {errors.pickupCity && touched.pickupCity && (
                            <div className="input-feedback text-danger">
                              {errors.pickupCity}
                            </div>
                          )}
                        </td>
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group">
                          <input
                            name="pickupZipcode"
                            placeholder="Enter your streetNumber"
                            type="number"
                            value={values.pickupZipcode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="streetNumber">Zipcode</label>
                          {errors.pickupZipcode && touched.pickupZipcode && (
                            <div className="input-feedback text-danger">
                              {errors.pickupZipcode}
                            </div>
                          )}
                        </td>
                      </tr>
                      <tr />
                      <tr>
                        <td className="form-label-group" colSpan="3">
                          <input
                            name="pickupInstructions"
                            placeholder="Instructions"
                            type="text"
                            value={values.pickupInstructions}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          <label htmlFor="streetName">Instructions</label>
                          {errors.pickupInstructions &&
                            touched.pickupInstructions && (
                              <div className="input-feedback text-danger">
                                {errors.pickupInstructions}
                              </div>
                            )}
                        </td>
                      </tr>
                      <br />
                      <button
                        className="btn btn-lg btn-success btn-block text-uppercase"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Create
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-block text-uppercase"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                      </button>
                    </table>
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

export default CreateRequestForm;

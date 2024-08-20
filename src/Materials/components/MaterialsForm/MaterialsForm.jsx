import { Formik, Field, Form } from "formik";
import React, { Component } from "react";

class MaterialsForm extends Component {
  handleSubmit = async (values, actions) => {
    await this.props.onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  render() {
    const isSubmitting = this.props.isLoading;

    return (
      <>
        <Formik
          initialValues={{ title: "", link: "" }}
          onSubmit={this.handleSubmit}>
          {props => {
            // З props Formik'а можна використовувати props.isSubmitting. Бо якщо використовувати this.props.isLoading, то доведеться його використати у addMaterial. А в цьому випадку при додаванні кожного нового матеріалу увесь список буде пропадати, бо в App.jsx по умові йде рендер або "LOADING" або <MaterialsList/>

            return (
              <Form>
                <label>
                  <Field type="text" name="title" placeholder="Title" />
                </label>

                <label>
                  <Field type="text" name="link" placeholder="Link" />
                </label>

                <button
                  type="submit"
                  disabled={props.isSubmitting || isSubmitting}>
                  Add material
                </button>
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
}

export default MaterialsForm;

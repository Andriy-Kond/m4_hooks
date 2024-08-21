import { Formik, Field, Form } from "formik";

function MaterialsForm({ onSubmit, isLoading }) {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ title: "", link: "" }} onSubmit={handleSubmit}>
        {props => {
          // З props Formik'а можна використовувати props.isSubmitting. Бо якщо використовувати this.props.isLoading, то доведеться його використати у addMaterial. А в цьому випадку при додаванні кожного нового матеріалу увесь список буде пропадати, бо в Materials.jsx по умові йде рендер або "LOADING" або <MaterialsList/>

          return (
            <Form>
              <label>
                <Field type="text" name="title" placeholder="Title" />
              </label>

              <label>
                <Field type="text" name="link" placeholder="Link" />
              </label>

              <button type="submit" disabled={props.isSubmitting || isLoading}>
                Add material
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default MaterialsForm;

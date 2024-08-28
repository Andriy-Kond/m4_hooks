import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { Button, Span } from "./ContactForm.styled";

const shema = object({
  name: string().required(),
  number: number().required().positive().integer(),
});

const initialValues = { name: "", number: "" };

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={shema}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>

        <label>
          Telephone
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <Button type="submit">
          <Span>Add contact</Span>
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

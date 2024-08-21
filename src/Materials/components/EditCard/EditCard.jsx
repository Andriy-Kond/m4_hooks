import Modal from "Modal";
import { Formik, Field, Form } from "formik";

function EditCard({ toggleModal, updateMaterial, material }) {
  const submitEdit = (values, actions) => {
    updateMaterial({
      ...material,
      link: values.link,
      title: values.title,
    });

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <h3>Редагування</h3>
      <Formik initialValues={{ title: "", link: "" }} onSubmit={submitEdit}>
        <Form>
          <label>
            <Field type="text" name="title" placeholder="Title" />
          </label>

          <label>
            <Field type="text" name="link" placeholder="Link" />
          </label>

          <button type="submit">Edit Material</button>
        </Form>
      </Formik>
    </Modal>
  );
}

export default EditCard;

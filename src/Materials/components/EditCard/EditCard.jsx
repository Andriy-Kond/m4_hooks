import Modal from "Modal";
import { Formik, Field, Form } from "formik";
import { Component } from "react";

class EditCard extends Component {
  submitEdit = (values, actions) => {
    const { toggleModal, updateMaterial, material } = this.props;

    updateMaterial({
      ...material,
      link: values.link,
      title: values.title,
    });

    toggleModal();
  };

  render() {
    const { toggleModal } = this.props;
    return (
      <Modal toggleModal={toggleModal}>
        <h3>Редагування</h3>
        <Formik
          initialValues={{ title: "", link: "" }}
          onSubmit={this.submitEdit}>
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
}

export default EditCard;

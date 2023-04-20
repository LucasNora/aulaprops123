import React from 'react';
import { Modal, Button, Form,} from "react-bootstrap";


interface Props {
  novoModal: boolean;
  handleOpenCloseModal: any;
}

export default function ModalComponent (props: Props){

  return (
    <Modal show={props.novoModal} onHide={props.handleOpenCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleOpenCloseModal}>
          Fechar
  </Button>
        <Button variant="primary" onClick={props.handleOpenCloseModal}>
          Savar
  </Button>
      </Modal.Footer>
    </Modal>
  )
}

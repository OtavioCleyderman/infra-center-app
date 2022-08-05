import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';

export function AddCardModal(props) {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
let id = uuidv4()
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

const getDataForm = () => {
  tasks.push({id, title, description}) 
  localStorage.setItem('tasks', JSON.stringify(tasks))
  props.onHide()
  setTitle('')
  setDescription('')
} 



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adicionar card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Título do tarefa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tarefa 123"
            autoFocus
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Descrição da tarefa</Form.Label>
          <Form.Control
            as="textarea"
            rows={3} 
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={getDataForm}>
          Confirmar tarefa
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
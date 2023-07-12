import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ show, handleClose, apps, setApps, drName }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    setApps([
      ...apps,
      {
        id: new Date().getTime(),
        patient: name,
        day: date,
        consulted: false,
        doctor: drName,
      },
    ]);
    setName("");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Verabredung für {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name des Patienten</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eingeben Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Datum</Form.Label>
              <Form.Control
                type="date"
                placeholder="Datum"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Speichern
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Schliessen
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;

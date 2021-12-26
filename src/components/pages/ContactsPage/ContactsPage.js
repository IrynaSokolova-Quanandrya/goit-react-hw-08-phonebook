import { Button } from "react-bootstrap";
import ContactList from "../../ContactList";
export default function Contacts() {
  const handleClick = (e) => {};

  return (
    <>
      <ContactList />
      <Button variant="primary" type="button" size="sm" onClick={handleClick}>
        Add contact
      </Button>
    </>
  );
}

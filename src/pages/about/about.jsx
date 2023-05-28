import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import { ABOUT_ME } from "../../utils/constans";

const About = () => {
  return (
    <>
      <Stack className="p-4">
        <Card.Header as="h5" className="mb-4">
          <Card.Title>{ABOUT_ME.experience}</Card.Title>
        </Card.Header>
        <Card.Body style={{border: '1px solid #0d6efd'}}>
          <Table striped bordered hover className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Stack</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {ABOUT_ME.stack &&
                ABOUT_ME.stack.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td style={{color: '#0d6efd'}}><Nav.Link target="_blank" href={item.to}>{item.link}</Nav.Link></td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card.Body>
      </Stack>
    </>
  );
};

export default About;

import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Stack from "react-bootstrap/Stack";
import { TEXT_PRELOADER } from '../../utils/constans';

const Preloader = () => {
  return (
    <>
      <Stack className="mx-auto mb-4">
        <Alert variant='light' style={{fontSize: 36, fontWeight: 'bold'}} className="mx-auto mb-4">{TEXT_PRELOADER}</Alert>
        <Spinner animation="border" variant="primary" style={{width: 100, height: 100}} className="mx-auto mb-4"/>
      </Stack>
    </>
  )
};

export default Preloader;

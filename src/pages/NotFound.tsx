import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Nothing here :(</h1>
      <Link to="/">Go back</Link>
    </>
  );
}

export default NotFound;

import Link from 'next/link';

function NotFound() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link href="/?search=&page=1">Main</Link>
    </div>
  );
}

export default NotFound;

import Link from "next/link";

export function BlogPaginator(
  { page, numPages }: { page: number, numPages: number }) {

  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Blog pages" className="mb-5">
      <ul className="pagination justify-content-center pt-lg-3 pt-1">
        <li className="page-item">
        </li>
        {pages.map((i) => (
          <li key={i} className={`page-item d-none d-sm-block ${i === page ? 'active' : ''}`}>
            <Link className="page-link" href={`/blog?page=${i}`}>{i}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

}
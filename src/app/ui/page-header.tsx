export function PageHeader({ title } : { title: string }) {
  return (
    <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
      <div className="col-lg-5 col-md-4 pt-5">
        <h1>{ title }</h1>
      </div>
    </div>
  );
}
export function PageHeader({ title, subtitle } : { title: string, subtitle?: string | undefined }) {
  return (
    <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
      <div className="col-12 pt-5">
        <h1>{ title }</h1>
      </div>
      <PageSubheader subtitle={subtitle} />
    </div>
  );
}

function PageSubheader({ subtitle } : { subtitle: string | undefined }) {
  if (!!subtitle) {
    return (
      <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-3">
        <div className="d-flex align-items-center flex-wrap text-muted mb-md-0 mb-4">
          <div className="fs-sm pe-3 me-3 mb-2">{ subtitle }</div>
        </div>
      </div>);
  }
  return <></>;
}
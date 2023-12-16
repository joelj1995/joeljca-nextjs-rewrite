import EmailSubscribeForm from "./email-subscribe-form";

export default function Footer() {
  return (
    <footer className="footer position-relative bg-dark pt-5 pb-4 pb-lg-5">
      <span className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75"></span>
      <div className="position-relative container pt-lg-4" data-bs-theme="dark">

        <div className="row pb-5">

          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              Midnight Sky Software Solutions Ltd.
            </div>
            <p className="fs-sm text-light opacity-70 pb-lg-3 mb-4">
              Head high up in the clouds
            </p>
            <EmailSubscribeForm />
          </div>

        </div>
      </div>

    </footer>
  );
}
import { environment } from "@/lib/environment";
import EmailSubscribeForm from "./email-subscribe-form";
import FooterServerInfo from "./footer-server-info";
import { navItems } from "@/lib/services/nav";
import Link from "next/link";

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

          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <ul className="nav flex-column pb-lg-1 mb-lg-3">
                  {navItems.map((item, index) => (
                    <li className="nav-link d-inline-block px-0 pt-1 pb-2" key={index}>
                      <Link
                        target={item.bypassRouter ? "_blank" : ""}
                        href={item.link}
                        className="nav-link text-light p-0"
                      >
                        { item.text }
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-xl-4 col-lg-3">
                <div id="footer-links" className="row">
                  <div className="col-lg-4">
                    <ul className="nav flex-column pb-lg-1 mb-lg-3">
                      <li className="nav-link d-inline-block px-0 pt-1 pb-2"><a className="nav-link text-light p-0" href="#">LinkedIn</a></li>
                      <li className="nav-link d-inline-block px-0 pt-1 pb-2"><a className="nav-link text-light p-0" href="#">Upwork</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 className="mb-2">Contact</h6>
                <a href="mailto:me@joelj.ca" className="fw-medium">me@joelj.ca</a>
              </div>

            </div>
          </div>
        </div>

        <FooterServerInfo
          version={environment.version}
        />

        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span className="text-light opacity-50">&copy; All rights reserved. Theme made by </span>
          <a className="nav-link d-inline-block p-0" href="https://createx.studio/" target="_blank" rel="noopener">Createx
            Studio</a>
        </p>

      </div>
    </footer>
  );
}
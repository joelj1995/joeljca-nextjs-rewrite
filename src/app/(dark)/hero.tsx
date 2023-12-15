import Link from "next/link";

export interface HeroProps {
  title1White: string;
  title2Blue: string;
  subtitle: string;
  tagline1: string;
  tagline2: string;
  tagline3: string;
  tagline4: string;
};

export default function Hero(props : HeroProps) {
  return (
    <section className="position-relative d-flex align-items-center min-vh-100 py-5 bg-dark overflow-hidden">
      <span className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75"></span>
      <div className="container position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3" data-bs-theme="dark">

        <div className="row gy-5">

          <div className="col-xl-5 col-lg-6">
            <div className="position-relative zindex-5 text-lg-start text-center">
              <h1 className="display-2 mb-4 pb-lg-3 pb-md-2">
                { props.title1White } <span className="text-primary">{ props.title2Blue }</span>
              </h1>
              <p className="mb-4 pb-lg-3 pb-md-2">
                <span className="me-2 text-light">
                  { props.subtitle }
                </span>
              </p>
              <Link href="/services" className="btn btn-lg btn-primary">My services</Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
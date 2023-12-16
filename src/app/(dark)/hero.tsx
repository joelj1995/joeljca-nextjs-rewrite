import Image from 'next/image';
import Link from "next/link";

import hero from '../../assets/img/landing/software-agency-3/hero-bg.png';
import HeroTagline from './hero-tagline';

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

          <div className="col-lg-6 offset-xl-1">
            <div className="position-relative ms-xl-0 ms-lg-4">
              <div className="position-absolute top-50 start-50 translate-middle ratio ratio-1x1"
                style={{ width: "125%", maxWidth: "49.75rem" }}>
                  <div className="p-md-0 p-5">
                    <Image
                      src={hero}
                      width={1560}
                      height={1560}
                      alt="Decorative graphic of orbitting spheres"
                      className="hero-animation-spin p-md-0 p-5"
                    />
                  </div>
              </div>

              <div className="position-relative row row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
                <div className="col">
                  <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                    <HeroTagline tagline={ props.tagline1 } seq={1} />
                    <HeroTagline tagline={ props.tagline2 } seq={2}  />
                  </div>
                </div>
                <div className="col mt-sm-5 mt-2 pt-sm-5">
                  <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                    <HeroTagline tagline={ props.tagline3 } seq={3}  />
                    <HeroTagline tagline={ props.tagline4 } seq={4}  />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
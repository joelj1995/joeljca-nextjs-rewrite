import Image from "next/image";

import me from '../../assets/its-me-2.jpg';
import Link from "next/link";

export interface AboutSectionProps {
  title: string;
  aboutMe: string;
};

export default function AboutSection(props : AboutSectionProps) {
  return (
    <section className="container my-5 py-lg-5 py-md-4 py-3">
      <div className="row gy-4 py-xl-3">
        <div className="col-md-4">
          <Image
            src={me}
            width={524}
            height={697}
            alt="Headshot of me (Joel Johnston)"
            className="rounded-3"
          />
        </div>
        <div className="col-lg-5 col-md-10 offset-lg-1 d-flex">
          <div className="align-self-center ps-lg-0 ps-md-4">
            <h2 className="h1 mb-lg-4 mb-3">{ props.title }</h2>
            <p className="mb-4 pb-lg-3 fs-lg">
              { props.aboutMe }
            </p>
            <Link href="/about" className="btn btn-lg btn-outline-primary">More about me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
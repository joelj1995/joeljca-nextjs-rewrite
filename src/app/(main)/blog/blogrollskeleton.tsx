import Image from "next/image";
import profilePic from '../../../assets/img/its-me.jpg';
import blogPreviewPic from '../../../assets/img/blog/01.jpg';

export function BlogRollSkeleton() {
  return (
    <div aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <article className="card border-0 shadow-sm overflow-hidden mb-4" key={i}>
          <div className="row g-0">

            <div className="col-sm-4 position-relative bg-position-center bg-repeat-0 bg-size-cover">
              <Image className="col-sm-4 position-relative bg-position-center bg-repeat-0"
                src={blogPreviewPic}
                alt="Blog preview"
                fill
                style={{ objectFit: 'cover', }}>
              </Image>
            </div>

            <div className="col-sm-8">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="placeholder col-2"></span>
                </div>
                <h3 className="h4 placeholder-glow">
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-3"></span>
                </h3>
                <p className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-7"></span>
                </p>
                <hr className="my-4"></hr>
                <div className="d-flex align-items-center justify-content-between">
                  <a  className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                    <Image src={profilePic} className="rounded-circle me-3" width={48} height={48} alt="Avatar" />
                    Joel Johnston
                  </a>
                </div>
              </div>
            </div>

          </div>
        </article>
      ))}
    </div>
  );
}
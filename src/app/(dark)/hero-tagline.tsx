export interface HeroTaglineProps {
  tagline: string;
  seq?: number;
}

export default function HeroTagline(props : HeroTaglineProps) {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-secondary rounded-3"
      style={{ minHeight: ' 176px', backdropFilter: 'blur(6px)' }}>
      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
        <span className="hero-animation-fade hero-animation-delay-1 text-white">
          { props.tagline }
        </span>
      </div>
    </div>
  );
}
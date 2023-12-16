export interface HeroTaglineProps {
  tagline: string;
  seq?: number;
}

export default function HeroTagline(props : HeroTaglineProps) {
  const delayClass = "hero-animation-delay-" + (props.seq ?? 1);
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-secondary rounded-3"
      style={{ minHeight: '176px', minWidth: '50%', backdropFilter: 'blur(6px)' }}>
      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
        <span className={`hero-animation-fade  text-white ${delayClass}`}>
          { props.tagline }
        </span>
      </div>
    </div>
  );
}
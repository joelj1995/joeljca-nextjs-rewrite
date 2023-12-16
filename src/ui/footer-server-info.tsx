"use server";

export interface FooterServerInfoProps {
  node: string;
  slot: string;
  lb: string
}

export default async function FooterServerInfo(props : FooterServerInfoProps) {
  return (
    <p className="font-monospace">
      <small>
        { props.node }
        { props.slot }
        { props.lb }
      </small>
    </p>
  );
}
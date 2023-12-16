"use server";

export interface FooterServerInfoProps {
  version: string;
}

export default async function FooterServerInfo(props : FooterServerInfoProps) {
  return (
    <p className="font-monospace">
      <small>
        <a href={`https://github.com/joelj1995/joeljdotca/commit/${props.version}`}>{ props.version }</a>
      </small>
    </p>
  );
}
import { VMServices } from "@/lib/model/vm-services";
import { PageHeader } from "../../../ui/page-header";
import ServiceItem from "./service-items";

async function getServicesStub(): Promise<VMServices> {
  return {
    services: [
      {
        name: "Full Stack Software Development",
        description: "I can build you a website or web application from the ground up. I can also build you a mobile app.",
        icon: "cms"
      },
      {
        name: "DevOps Consulting",
        description: "Do software releases make you sweat? I will walk you through best practices in version control, CI/CD, release management and monitoring so that you can deploy updates to your web service without fear.",
        icon: "rocket"
      }
    ]
  };
}

export default async function ServicesPage() {

  const services = await getServicesStub();

  return (
    <div className="container">

      <PageHeader title="Services" />

      <div className="row row-cols-1 row-cols-md-2">

        {services.services.map((service, index) => (
          <ServiceItem
            key={index}
            name={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}

      </div>

      <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
          <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">Looking for next steps?</h2>
          <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">Shoot me an email at <a href="mailto:me@joelj.ca">me@joelj.ca</a>.</p>
        </section>

    </div>
  )
}
import { PageHeader } from "../../../ui/page-header";
import ServiceItem from "./service-items";
import { getServicesViewModelFromContentful } from "@/lib/services/contentful";

export default async function ServicesPage() {

  const services = await getServicesViewModelFromContentful();

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
        <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">Shoot me an email at <a href="mailto:me@alexj.ca">me@alexj.ca</a>.</p>
      </section>

    </div>
  )
}
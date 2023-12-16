import { getHomeViewModelFromContentful } from "@/lib/services/contentful";
import AboutSection from "./about-section";
import Hero from "./hero";
import { PageHeader } from "@/ui/page-header";
import { NotFoundError } from "@/lib/model/app-error";

export default async function Home() {

  const vm = await getHomeViewModelFromContentful(1);

  if (vm instanceof NotFoundError) {
    return (
      <div className="container">
        <PageHeader
          title="Not Found"
          subtitle="Sorry, there was an issue loading this page."/>
      </div>
    );
  }


  return (
    <>
      <Hero
        title1White={vm.title1White}
        title2Blue={vm.title2Blue}
        subtitle={vm.subtitle}
        tagline1={vm.tagline1}
        tagline2={vm.tagline2}
        tagline3={vm.tagline3}
        tagline4={vm.tagline4}
      />

      <AboutSection
        title={vm.aboutMeTitle}
        aboutMe={vm.aboutMe}
      />
    </>
  )
}

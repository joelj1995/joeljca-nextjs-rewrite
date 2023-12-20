import { VMSkills } from "@/lib/model/vm-skills";
import { PageHeader } from "../../../ui/page-header";

async function getSkillsStub(): Promise<VMSkills> {
  return {
    preamble: "I have a wide range of skills, but I'm always learning new things. Here are some of the things I'm good at.",
    categories: [
      {
        name: "Systems Architecture",
        description: "Important architecture stuff",
        skills: [
          {
            name: "Web Application Architecture",
            description: "Doing stuff in the cloud",
          },
          {
            name: "Azure Cloud",
            description: "Doing stuff in Azure",
          },
          {
            name: "",
            description: ""
          }
        ]
      }
    ]
  };
}

export default async function SkillsPage() {

  const skills = await getSkillsStub();

  return (
    <div className="container">
      <PageHeader title="Skills" />
      <p>{ skills.preamble }</p>
      {skills.categories.map((category, index) => (
        <>
          <h2>{ category.name }</h2>
          <p>{ category.description }</p>
          {category.skills.map((skill, index) => (
            <>
              <h3 className="h4">{ skill.name }</h3>
              <p>{ skill.description }</p>
            </>
          ))}
        </>
      ))}
    </div>
  )
}
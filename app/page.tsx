import { ProjectInterface } from "@/common.types";
import Categories from "@/components/Categories";
import Loadmore from "@/components/Loadmore";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";

interface ProjectsSearchProps {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

interface SearchParamsProps {
  category?: string;
  endCursor?: string;
}
interface HomeProps {
  searchParams: SearchParamsProps;
}

export default async function Home({
  searchParams: { category, endCursor },
}: HomeProps) {
  const data = (await fetchAllProjects(
    category,
    endCursor
  )) as ProjectsSearchProps;

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        <Categories />
        <p className="w-full text-center my-10 px-2">
          No projects found, go create some first.
        </p>
      </section>
    );
  }

  const pagination = data.projectSearch.pageInfo;

  return (
    <section className="flex-start paddings mb-16 flex-col">
      <Categories />

      <section className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={`${node?.id}`}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy.name}
            avatarUrl={node?.createdBy.avatarUrl}
            userId={node?.createdBy.id}
          />
        ))}
      </section>

      <Loadmore
        startCursor={pagination.startCursor}
        endCursor={pagination.endCursor}
        hasPreviousPage={pagination.hasPreviousPage}
        hasNextPage={pagination.hasNextPage}
      />
    </section>
  );
}

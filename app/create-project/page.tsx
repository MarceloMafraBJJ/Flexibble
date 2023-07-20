import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function CreateProject() {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");

  return (
    <Modal>
      <h3 className="md:text-5xl text-3xl font-extrabold text-left max-w-5xl w-full">
        Create a new Project
      </h3>

      <ProjectForm type="create" session={session} />
    </Modal>
  );
}

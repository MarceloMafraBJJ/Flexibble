"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { deleteProject, fetchToken } from "@/lib/actions";
import { useRouter } from "next/navigation";

const ProjectActions = ({ projectId }: { projectId: string }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDeleteProject = async () => {
    setIsDeleting(true);
    const { token } = await fetchToken();

    try {
      await deleteProject(projectId, token);

      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter p-3 text-gray-100 bg-light-white-400 rounded-lg text-sm font-medium"
      >
        <Image src="/pencile.svg" alt="edit" width={15} height={15} />
      </Link>

      <button
        type="button"
        className={`flexCenter p-3 text-gray-100 hover:bg-red-600 rounded-lg text-sm font-medium  ${
          isDeleting ? "bg-gray" : "bg-primary-purple"
        }`}
      >
        <Image
          src="/trash.svg"
          alt="edit"
          width={15}
          height={15}
          onClick={handleDeleteProject}
        />
      </button>
    </>
  );
};

export default ProjectActions;

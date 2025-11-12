
import ProjectPreview from "./ProjectPreviewCard";
import ProjectHead from "./ProjectHeader";

function Card() {

  return (
    <div className="sm:w-[70%] xl:w-[60%] m-auto py-10">
      <ProjectHead/>
      <ProjectPreview /> 
    </div>
  );
}

export default Card;

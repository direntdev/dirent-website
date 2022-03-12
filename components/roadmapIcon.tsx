import {
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";

export const RoadmapIcon = (props: {
  type: "done" | "milestone" | "planned" | "maybe";
}) => {
  const { type } = props;

  switch (type) {
    case "done":
      return <CheckCircleIcon className="text-green-500" />;
    case "milestone":
      return <StarIcon className="text-orange-500"></StarIcon>;
    case "planned":
      return <CheckCircleIcon className="text-blue-500" />;
    case "maybe":
      return <QuestionMarkCircleIcon className="text-gray-500" />;
    default:
      return null;
  }
};

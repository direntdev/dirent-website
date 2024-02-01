import Link from "next/link";
import "react-image-lightbox/style.css";

export const SectionWithContent = (props: {
  header: string;
  description: string;
  contentPosition: "left" | "right";
  renderContent: () => JSX.Element;
  className?: string;
  href?: string;
}) => {
  const {
    header,
    description,
    renderContent,
    contentPosition,
    className,
    href,
  } = props;
  return (
    <div
      className={`relative items-center text-center md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-8 ${
        className ?? ""
      }`}
    >
      <div
        className={`relative space-y-3 ${
          contentPosition === "left" ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <h3 className="section-header">{header}</h3>
        <p className="text-lg">{description}</p>
        {href && (
          <Link href={href}>
            <a className="text-blue-500">Learn more</a>
          </Link>
        )}
      </div>
      <div className="mx-auto md:order-last" aria-hidden="true">
        {renderContent()}
      </div>
    </div>
  );
};

import Link from 'next/link';
import { LightboxImage } from './lightboxImage';
import 'react-image-lightbox/style.css';

export const SectionWithImage = (props: {
  header: string;
  description: string;
  imageSrc: string;
  imagePosition: "left" | "right";
  className?: string;
  href?: string;
}) => {
  const { header, description, imageSrc, imagePosition, className, href } =
    props;
  return (
    <div
      className={`relative items-center text-center md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-8 ${
        className ?? ""
      }`}
    >
      <div
        className={`relative space-y-3 ${
          imagePosition === "left" ? "md:col-start-1" : "md:col-start-2"
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
        <LightboxImage src={imageSrc} />
      </div>
    </div>
  );
};

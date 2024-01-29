import Image from "next/image";
import Lightbox from "react-image-lightbox";
import { useState } from "react";
import "react-image-lightbox/style.css";

export const LightboxImage = (props: { src: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        document.body.style.overflow = isOpen ? "auto" : "hidden";
        setIsOpen(state => !state);
      }}
      className="cursor-pointer"
    >
      {isOpen && (
        <Lightbox
          clickOutsideToClose={false}
          mainSrc={props.src}
          imagePadding={50}
          enableZoom={false}
          onCloseRequest={() => {
            document.body.style.overflow = "auto";
            setIsOpen(false);
          }}
        />
      )}
      <Image
        className="super-shadow"
        alt=""
        width={2680 / 4}
        height={1720 / 4}
        src={props.src}
      ></Image>
    </div>
  );
};

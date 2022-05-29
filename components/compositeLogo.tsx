const Outter = (props: {
  delaySec: number;
  offset: number;
  className?: string;
}) => {
  return (
    <img
      className={`spin-z round absolute rounded-[15%] ${props.className}`}
      style={{
        right: `${props.offset}%`,
        width: "75%",
        height: "75%",
        transform: "perspective(15cm) rotateY(-45deg)",
        animationDelay: `${props.delaySec}s`,
      }}
      src="./logo-outter.svg"
    ></img>
  );
};

const Inner = (props: {
  delaySec: number;
  offset: number;
  className?: string;
}) => {
  return (
    <img
      style={{
        right: `${props.offset}%`,
        width: "75%",
        height: "75%",
        transform: "perspective(15cm) rotateY(-45deg)",
        animationDelay: `${props.delaySec}s`,
      }}
      className="spin-z-reverse absolute flex-1 rounded-[22%] bg-gray-900/50"
      src="./logo-inner.svg"
    ></img>
  );
};

export const CompositeLogo = () => {
  let offset = 0;
  const getOffset = () => {
    offset += 6;
    console.log(offset);

    return offset;
  };

  return (
    <div className="relative flex aspect-square h-full w-full items-center justify-center">
      <Outter delaySec={1.6} offset={getOffset()} />
      <Inner delaySec={1.2} offset={getOffset()} />
      <Outter delaySec={0.8} offset={getOffset()} />
      <Inner delaySec={0.4} offset={getOffset()} />
      <Outter delaySec={0} offset={getOffset()} />
    </div>
  );
};

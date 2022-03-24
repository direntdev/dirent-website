const Outter = (props: {
  delaySec: number;
  offset: number;
  className?: string;
}) => {
  return (
    <img
      className={`spin-z absolute rounded-[70px] rounded  ${props.className}`}
      style={{
        right: `${props.offset}px`,
        width: "75%",
        height: "75%",
        transform: "perspective(500px) rotateY(-45deg)",
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
        right: `${props.offset}px`,
        width: "75%",
        height: "75%",
        transform: "perspective(500px) rotateY(-45deg)",
        animationDelay: `${props.delaySec}s`,
      }}
      className="spin-z-reverse absolute rounded-[70px] bg-gray-900/50"
      src="./logo-inner.svg"
    ></img>
  );
};

export const CompositeLogo = () => {
  let offset = 0;
  const getOffset = () => {
    offset += 25;
    return offset;
  };
  return (
    <div className="relative flex h-[400px] w-[400px] items-center justify-center">
      <Outter delaySec={1.6} offset={getOffset()} />
      <Inner delaySec={1.2} offset={getOffset()} />
      <Outter delaySec={0.8} offset={getOffset()} />
      <Inner delaySec={0.4} offset={getOffset()} />
      <Outter delaySec={0} offset={getOffset()} />
    </div>
  );
};

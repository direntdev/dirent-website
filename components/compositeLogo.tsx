const Outter = (props: { offset: number; className?: string }) => {
  return (
    <img
      className={`absolute rounded-[70px] rounded  ${props.className}`}
      style={{
        right: `${props.offset}px`,
        width: "75%",
        height: "75%",
        transform: " perspective(500px) rotateY(-45deg)",
      }}
      src="./logo-outter.svg"
    ></img>
  );
};

const Inner = (props: { offset: number; className?: string }) => {
  return (
    <img
      style={{
        right: `${props.offset}px`,
        width: "75%",
        height: "75%",
        transform: " perspective(500px) rotateY(-45deg)",
      }}
      className="absolute rounded-[70px] bg-gray-900/50"
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
      <Outter offset={getOffset()} />
      <Inner offset={getOffset()} />
      <Outter offset={getOffset()} />
      <Inner offset={getOffset()} />
      <Outter offset={getOffset()} />
    </div>
  );
};

export const BackgroundLight = (props: { className: string }) => {
  return (
    <div className={`relative rounded-full blur-3xl ${props.className}`}></div>
  );
};

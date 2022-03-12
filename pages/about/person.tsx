export const Person = (props: {
  name: string;
  role: string;
  imageUrl: string;
}) => {
  const { name, role, imageUrl } = props;
  return (
    <li key={name}>
      <div className="space-y-4">
        <img
          className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
          src={imageUrl}
          alt=""
        />
        <div className="space-y-2">
          <div className="text-xs font-medium lg:text-sm">
            <h3>{name}</h3>
            <p className="text-skin-accent">{role}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

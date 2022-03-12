export const FooterColumn = (props: {
  name: string;
  items: { name: string; href: string }[];
}) => {
  const { name, items } = props;
  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        {name}
      </h3>
      <ul role="list" className="mt-4 space-y-4">
        {items.map(item => (
          <li key={item.name} className="text-2center">
            <a
              href={item.href}
              className="text-base text-gray-300 hover:text-white "
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

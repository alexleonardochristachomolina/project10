export const Categories = () => {
  const categories = [];
  const AddCategory = (category, href = '#') => {
    categories.push({ id: categories.length, category: category, href: href });
  };

  AddCategory('Mobile accesory');
  AddCategory('Electronics');
  AddCategory('Smarthphones');
  AddCategory('Modern tech');
  AddCategory('See all');

  return (
    <ul className="flex flex-col font-normal mb-5">
      {categories.map((e) => (
        <li
          key={e.id}
          className="h-9 flex items-center cursor-pointer text-gray-600 hover:bg-[#F1F1F1] last:text-[#0D6EFD]"
        >
          <a href={e.href}>{e.category}</a>
        </li>
      ))}
    </ul>
  );
};

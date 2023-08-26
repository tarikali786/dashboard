export const Header = ({ category, title }) => (
  <div className="md:pt-0 pt-10 ">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

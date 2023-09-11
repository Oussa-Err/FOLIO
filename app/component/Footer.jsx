export const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col justify-center items-center pb-1">
        <ul className="flex gap-4 pb-2">
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <small>
          © 2023 - <span className="text-orange-500">Err.</span>
        </small>
      </footer>
    </div>
  );
};

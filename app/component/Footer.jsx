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
            <a href="#achievements">Achievement</a>
          </li>
        </ul>
        <small>
          © {new Date().getFullYear()} - <a href="http://github.com/Oussa-Err"><span className="text-orange-500">Err.</span></a>
        </small>
      </footer>
    </div>
  );
};

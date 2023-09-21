import { Header } from "../component/Header";

const Resume = () => {
  return (
    <div>
      <Header />
      <iframe
        className="w-full h-screen"
        src="/assets/curriculum-vitae-en-version.pdf"
        title="Inline Frame Example"
        frameborder="0"
      >
        Resume
      </iframe>
    </div>
  );
};

export default Resume;

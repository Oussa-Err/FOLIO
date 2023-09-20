import { Header } from "../component/Header";

const Resume = () => {
  return (
    <div>
        <Header />
              <iframe
        className="w-full h-screen"
        src="/assets/curriculum-vitae-en-version.pdf"
        title="Inline Frame Example"
        width="300"
        height="200"
      >
        Resume
      </iframe>
    </div>
  );
};

export default Resume;

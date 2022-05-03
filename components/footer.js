import Container from "./container";
import data from "../contentrain/Footer/Footer.json";
const footerData = data[0];

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-m lg:text-m font-bold tracking-tighter leading-tight text-center lg:text-left mb-2 lg:mb-0 lg:pr-4 lg:w-1/2">
            {footerData.text}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={footerData.linkedIn.link}
              className="mx-3 font-bold hover:underline"
            >
              {footerData.linkedIn.text}
            </a>
            <a
              href={footerData.github.link}
              className="mx-3 font-bold hover:underline"
            >
              {footerData.github.text}
            </a>
            <a
              href={footerData.twitter.link}
              className="mx-3 font-bold hover:underline"
            >
              {footerData.twitter.text}
            </a>
            <a
              href={footerData.instagram.link}
              className="mx-3 font-bold hover:underline"
            >
              {footerData.instagram.text}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

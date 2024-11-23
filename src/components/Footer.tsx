// Base the url from json profile?
import s from "./footer.module.css";

export default function Footer({ url = "https://github.com/itsNiazi/itsNiazi.github.io" }) {
  return (
    <footer className={s.foot}>
      <p>Developed by Tareq Niazi</p>
      <a href={url} target="_blank">
        View the code
      </a>
    </footer>
  );
}

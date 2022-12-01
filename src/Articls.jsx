import Link from "@mui/material/Link";

export default function ArticlsNews({
  title,
  keywords,
  image_url,
  description,
  content,
  pubDate,
  country,
  link
}) {
  return (
    <div className="article">
      <h2> {title} </h2>
      <h4> {description} </h4>
      <p> {content} </p>
      <img
        src={
          image_url
            ? image_url
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
        }
        alt={keywords}
        height={150}
      />
      <p>
        {" "}
        {pubDate}, {country}{" "}
      </p>
      <Link href={link} underline="hover" target="_blank">
        Read more...
      </Link>
    </div>
  );
}

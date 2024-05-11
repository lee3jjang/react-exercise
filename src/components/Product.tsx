import "./Product.css";

type Props = { src: string; alt: string; title: string; description: string };

export const Product = ({ src, alt, title, description }: Props) => {
  return (
    <div className="product">
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

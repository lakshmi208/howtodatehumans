type Props = {
  image: string;
  imageAlt: string;
  title: string;
  body: string;
};

const InsightCard = ({ image, imageAlt, title, body }: Props) => {
  return (
    <article className="grid grid-cols-[5rem_1fr] md:grid-cols-[7rem_1fr] gap-6 md:gap-8 items-start py-10 border-t border-border">
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="font-display italic text-2xl md:text-3xl leading-snug mb-3" style={{ color: 'hsl(var(--coral))' }}>
          {title}
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl">
          {body}
        </p>
      </div>
    </article>
  );
};

export default InsightCard;

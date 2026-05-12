type Props = {
  image: string;
  date: string;
  title: string;
  tagline: string;
  caseStudyUrl?: string;
};

const EventSummaryCard = ({ image, date, title, tagline, caseStudyUrl }: Props) => {
  return (
    <article className="group flex flex-col">
      <div className="aspect-square overflow-hidden bg-muted mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <p className="eyebrow mb-2 text-muted-foreground">{date}</p>
      <h3 className="font-display text-2xl md:text-3xl leading-tight mb-2">{title}</h3>
      <p className="text-base italic text-foreground/75 mb-4">{tagline}</p>
      {caseStudyUrl ? (
        <a
          href={caseStudyUrl}
          className="text-sm font-medium underline underline-offset-4 self-start hover:opacity-70 transition-opacity"
        >
          Read the case study →
        </a>
      ) : (
        <span className="text-sm text-muted-foreground self-start italic">
          Case study coming soon
        </span>
      )}
    </article>
  );
};

export default EventSummaryCard;

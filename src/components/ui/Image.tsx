interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

function Image({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  fetchPriority,
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      {...(fetchPriority && { fetchPriority })}
    />
  );
}

export default Image;

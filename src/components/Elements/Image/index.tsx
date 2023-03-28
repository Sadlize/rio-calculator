import NextImage from "next/image";
import { Property } from "csstype";

export type TDungeonImage = Pick<TProps, "src" | "alt" | "blurDataUrl">;

type TProps = {
  priority?: boolean;
  src: string;
  width?: number;
  height?: number;
  layout?: string;
  alt: string;
  className?: string;
  blurDataUrl?: string | undefined;
};

const Image = ({
  priority,
  src,
  width,
  height,
  layout,
  alt,
  className,
  blurDataUrl,
}: TProps) => {
  const ImageInlineStyles: React.CSSProperties = {
    objectFit: !!layout ? (layout as Property.ObjectFit) : undefined,
  };

  return (
    <>
      <NextImage
        placeholder={blurDataUrl ? "blur" : undefined}
        blurDataURL={blurDataUrl}
        priority={priority}
        className={className}
        alt={alt}
        src={src}
        width={width}
        height={height}
        fill={!!layout}
        style={ImageInlineStyles}
        sizes={"99vw"}
      />
    </>
  );
};

export default Image;

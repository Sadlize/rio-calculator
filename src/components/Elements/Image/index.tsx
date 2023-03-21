import NextImage from "next/image";
import CSS, { Property } from "csstype";
import ObjectFit = Property.ObjectFit;

export type TDungeonImage = Pick<TProps, "src" | "width" | "height" | "alt">;

type TProps = {
  priority?: boolean;
  src: string;
  width?: number;
  height?: number;
  layout?: string;
  alt: string;
  className?: string;
};

const Image = ({
  priority,
  src,
  width,
  height,
  layout,
  alt,
  className,
}: TProps) => {
  const ImageInlineStyles: CSS.Properties = {
    objectFit: !!layout ? (layout as ObjectFit) : undefined,
  };

  return (
    <NextImage
      priority={priority}
      className={className}
      alt={alt}
      src={src}
      width={width}
      height={height}
      fill={!!layout}
      style={ImageInlineStyles}
      sizes={"1vh"}
    />
  );
};

export default Image;

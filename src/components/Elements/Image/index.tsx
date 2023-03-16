import NextImage from "next/image";
import CSS, { Property } from "csstype";
import ObjectFit = Property.ObjectFit;

export type TDungeonImage = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
};

type TProps = {
  src: string;
  width?: number;
  height?: number;
  layout?: string;
  alt: string;
  className?: string;
};

const Image = ({ src, width, height, layout, alt, className }: TProps) => {
  const ImageInlineStyles: CSS.Properties = {
    objectFit: !!layout ? (layout as ObjectFit) : undefined,
  };

  return (
    <NextImage
      className={className}
      alt={alt}
      src={src}
      width={width}
      height={height}
      fill={!!layout}
      style={ImageInlineStyles}
    />
  );
};

export default Image;

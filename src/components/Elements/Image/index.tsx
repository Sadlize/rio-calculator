import React from 'react';
import NextImage from 'next/image';
import { Property } from 'csstype';

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

export type TDungeonImage = Pick<TProps, 'src' | 'alt' | 'blurDataUrl'>;

function Image({
  priority,
  src,
  width,
  height,
  layout = undefined,
  alt,
  className,
  blurDataUrl,
}: TProps) {
  const ImageInlineStyles: React.CSSProperties = {
    objectFit: layout ? (layout as Property.ObjectFit) : undefined,
  };

  return (
    <NextImage
      placeholder={blurDataUrl ? 'blur' : undefined}
      blurDataURL={blurDataUrl}
      priority={priority}
      className={className}
      alt={alt}
      src={src}
      width={width}
      height={height}
      fill={!!layout}
      style={ImageInlineStyles}
      sizes="99vw"
    />
  );
}

export default Image;

import React from 'react';
import { CardMedia } from '@mui/material';

type StyleOperator = 'px' | 'rem' | 'em' | 'vw' | 'vh' | '%';

export type ZoomInCardMediaProps = {
  /**
   * the url of the media to be rendered
   */
  media: string;

  /**
   * the width of the media (in pixels)
   * @default 300
   * @optional
   */
  width?: number;

  /**
   * the height of the media (in pixels)
   * @default 300
   * @optional
  */
  height?: number;

  /**
   * the operator to be used for the width (default is 'px')
   */
  widthOperator?: StyleOperator;

  /**
   * the operator to be used for the height (default is 'px')
   */
  heightOperator?: StyleOperator;
};

export function ZoomInCardMedia({ media, width = 300, height = 500, widthOperator = 'px', heightOperator = 'px' }: ZoomInCardMediaProps) {
  return (
    <div
      style={{
        width: `${width}${widthOperator}`,
        height: `${height}${heightOperator}`,
        overflow: 'hidden',
        borderRadius: '8px',
      }}
    >
      <CardMedia
        component="img"
        image={media}
        sx={{ p: 0, m: 0 }}
      />
    </div>
  );
}

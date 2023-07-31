import React, { useMemo } from 'react';
import { Card as MUICard, CardContent, CardMedia, Box } from '@mui/material';


import { Chip } from '@showoff/design.elements.chip';
import { Margin, MarginType } from '@showoff/design.layouts.margin';

import { Typography } from '@showoff/design.typography.typography';
import { Heading } from '@showoff/design.typography.heading';

export type CardProps = {
  /**
   * The title of the card
   */
  title: string

  /**
   * The subtitle of the card
   */
  subtitle?: string

  /**
   * the tags of the card
   */
  tags?: string[]

  /**
   * banner image of the card
   */
  bannerImage?: string

  /**
   * the card view to use
   * @default 'compact'
   */
  view?: 'compact' | 'detailed';
};

export function Card({ subtitle, tags = [], title, bannerImage, view = 'compact' }: CardProps) {

  const CardBanner = useMemo(() => <CardMedia
    component="img"
    image={bannerImage}
    sx={{
      ...view === 'compact' && {
        height: '181px',
        width: '100%',
      },
      ...view === 'detailed' && { p: 0 },
    }}
  />, [bannerImage, view]);

  const CardTags = useMemo(() => {
    return (
      <>
        {tags.length > 0 && (
          <Margin
            mt={MarginType.SMALL}
          >
            <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap', }}>
              {tags.map((tag) => (
                <Chip
                  content={tag}
                  key={tag}
                />
              ))}
            </Box>
          </Margin>
        )}
      </>
    )
  }, []);

  if (!bannerImage) {
    throw new Error('bannerImage is required');
  }

  if (view === 'compact') {
    return (
      <MUICard
        variant='outlined'
        sx={{
          background: (theme) => theme.palette.background.paper,
          width: '370px',
          border: 'none'
        }}
      >
        {CardBanner}
        <CardContent>
          <Typography variant="body1"
            fontWeight={700}
            fontSize={18}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2"
              fontWeight={400}
              lineHeight={1.5}
              color="textSecondary"
            >
              {subtitle}
            </Typography>
          )}
          {CardTags}
        </CardContent>
      </MUICard>
    )
  }

  return (
    <Box sx={{ display: 'flex', gap: 5 }}>
      <div
        style={{
          overflow: 'hidden',
          borderRadius: '8px',
          width: '600px',
          height: '340px'
        }}
      >
        {CardBanner}
      </div>
      <Box sx={{ mt: 4 }}>
        <Heading
          value={title}
          sx={{
            color: (theme) => theme.palette.text.primary,
            fontWeight: 500
          }}
        />
        <Margin
          mt={MarginType.SMALL}
        />
        <Typography
          variant="body1"
          color="textSecondary"
          fontSize={22}
        >
          {subtitle}
        </Typography>
        <Margin
          mt={MarginType.SMALL}
        >
          {CardTags}
        </Margin>
      </Box>
    </Box>
  );
}

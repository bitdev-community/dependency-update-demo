import React from 'react';
import { Chip as MuiChip } from '@mui/material';

export type ChipProps = {
  /**
   * The content of the chip.
   */
  content: string
};

export function Chip({ content }: ChipProps) {
  return (
    <MuiChip
      label={content}
      size="medium"
      sx={{
        "& .MuiChip-root": {
          borderRadius: '6px'
        },
        "& .MuiChip-label": {
          px: 0,
          py: '8px'
        }
      }}
    />
  );
}

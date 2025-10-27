import React from 'react';
import { Typography, Box } from '@mui/material';
import { NodeModel } from '../models';
import { modifierToSx, textStyleToSx } from '../utils';

export interface RenderTextProps {
  node: NodeModel;
}

export const RenderText: React.FC<RenderTextProps> = ({ node }) => {
  const text = node.title || node.description || node.label || '';
  const modifierSx = modifierToSx(node.modifier);
  const textStyleSx = textStyleToSx(node.textStyle);

  // If we have modifier styles (layout/container properties), wrap in Box
  const hasModifier = modifierSx && typeof modifierSx === 'object' && !Array.isArray(modifierSx) && Object.keys(modifierSx).length > 0;

  if (hasModifier) {
    return (
      <Box sx={modifierSx}>
        <Typography sx={textStyleSx}>
          {text}
        </Typography>
      </Box>
    );
  }

  return (
    <Typography sx={textStyleSx}>
      {text}
    </Typography>
  );
};

import React from 'react';
import { Button, SxProps, Theme } from '@mui/material';
import { NodeModel } from '../models';
import { modifierToSx, textStyleToSx } from '../utils';

export interface RenderButtonProps {
  node: NodeModel;
  onAction?: (action: string) => void;
}

export const RenderButton: React.FC<RenderButtonProps> = ({ node, onAction = () => {} }) => {
  const variant = node.buttonVariant === 'outlined' ? 'outlined' : node.buttonVariant === 'text' ? 'text' : 'contained';

  const sx = {
    ...modifierToSx(node.modifier),
    ...textStyleToSx(node.textStyle),
    ...(node.backgroundColor && { backgroundColor: node.backgroundColor }),
  } as SxProps<Theme>;

  return (
    <Button
      variant={variant}
      onClick={() => node.action && onAction(node.action)}
      sx={sx}
    >
      {node.label || node.title || 'Button'}
    </Button>
  );
};

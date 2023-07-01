import { AppState, useSelector } from '@/store';
import { Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  sx?: any;
  style?:CSSProperties | undefined
};

const BlankCard = ({ children, className, sx , style}: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card style={style}
      sx={{ p: 0, border: !customizer.isCardShadow ? `1px solid ${borderColor}` : 'none', position: 'relative', sx }}
      className={className}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;

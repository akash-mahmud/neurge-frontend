import { Theme } from '@mui/material/styles';

declare module '@mui/system' {
  interface SxProps {
    theme?: Theme | any;
  }
}

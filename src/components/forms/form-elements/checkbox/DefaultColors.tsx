import React from 'react';
import { Box, Checkbox } from '@mui/material';

const DefaultcolorsCheckbox = () => (
    <Box textAlign="center">
        <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Checkbox
            defaultChecked
            color="secondary"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Checkbox
            defaultChecked
            sx={{
                color: (theme:any) => theme.palette.success.main,
                '&.Mui-checked': {
                    color: (theme:any) => theme.palette.success.main,
                },
            }}
        />
        <Checkbox
            defaultChecked
            sx={{
                color: (theme:any) => theme.palette.error.main,
                '&.Mui-checked': {
                    color: (theme:any) => theme.palette.error.main,
                },
            }}
        />
        <Checkbox
            defaultChecked
            sx={{
                color: (theme:any) => theme.palette.warning.main,
                '&.Mui-checked': {
                    color: (theme:any) => theme.palette.warning.main,
                },
            }}
        />
    </Box>
);

export default DefaultcolorsCheckbox;

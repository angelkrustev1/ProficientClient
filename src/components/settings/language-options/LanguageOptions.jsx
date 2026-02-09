import { useContext, useState } from 'react';
import { Button, Menu, MenuItem, Fade } from '@mui/material';
import { LanguageContext } from '../../../contexts/LanguageContext';
import english from '../../../languages/english';
import bulgarian from '../../../languages/bulgarian';
import german from '../../../languages/german';
import french from '../../../languages/french';
import spanish from '../../../languages/spanish';
import useLanguage from '../../../hooks/useLanguage';

export default function LanguageOptions() {
    let language = useLanguage();
    const { languageChangeHandler } = useContext(LanguageContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                onClick={handleClick}
                variant="outlined"
                sx={{
                    bgcolor: 'base.light',
                    color: 'base.mid',
                    fontSize: '0.9rem',
                    px: 4,
                    py: 0.5,
                    minWidth: '170px',
                    borderColor: 'base.mid',
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                        bgcolor: 'base.soft',
                        color: 'base.hard',
                        borderColor: 'base.soft',
                    },
                }}
            >
                {language.language}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                PaperProps={{
                    sx: {
                        width: 200,
                        maxHeight: 240,
                        bgcolor: 'base.light',
                        color: 'base.hard',
                        borderRadius: 2,
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.15)',
                    },
                }}
            >
                <MenuItem onClick={() => languageChangeHandler(bulgarian)}>{language.bulgarian}</MenuItem>
                <MenuItem onClick={() => languageChangeHandler(english)}>{language.english}</MenuItem>
                <MenuItem onClick={() => languageChangeHandler(spanish)}>Spanish</MenuItem>
                <MenuItem onClick={() => languageChangeHandler(french)}>French</MenuItem>
                <MenuItem onClick={() => languageChangeHandler(german)}>German</MenuItem>
            </Menu>
        </>
    );
}

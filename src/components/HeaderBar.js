import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton, TextField, Box } from '@mui/material';
import { Menu, Search, ArrowBack, Settings } from '@mui/icons-material';

const Header = styled(AppBar)`
    z-index: 1201;
    background: #fff;
    height: 70px;
    box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
    color: #5f6368;
    font-size: 24px;
    margin-left: 25px;
`;

const SearchField = styled(TextField)`
    top:5px;
    margin: 0 15px;
    width: 700px;
    font-size:100px;
    

    & .MuiOutlinedInput-root {
        border-radius: 5px;
        & fieldset {
            border-color: #dadce0;
        }
        &:hover fieldset {
            border-color: #bdbdbd;
        }
        &.Mui-focused fieldset {
            border-color: #4285f4;
        }
    }
`;

// تصميم أيقونة الرجوع ملتفة
const TwistedArrowButton = styled(IconButton)`
  
    padding: 8px;
    
    &:hover {
        background-color: #e0e0e0;
    }
    transform: rotate(55deg);  // تدوير السهم لخلق الشكل الملتف
`;

const GridIcon = styled(Box)`
    display: grid;
    grid-template-columns: repeat(2, 8px); // 2 أعمدة من دوائر 8px
    grid-template-rows: repeat(2, 8px); // 2 صفوف من دوائر 8px
    gap: 5px;
    justify-items: center;
    align-items: center;
`;

const Circle = styled(Box)`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;  
`;

const HeaderBar = ({ open, handleDrawer }) => {
    const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png';

    return (
        <Header>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left side - Menu, Logo, and Heading */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={handleDrawer} edge="start" sx={{ marginRight: '10px' }}>
                        <Menu />
                    </IconButton>
                    <img src={logo} alt="logo" style={{ height: '40px', marginRight: '10px' }} />
                    <Heading> Keep</Heading>
                </div>

                {/* Search bar */}
                <SearchField
                    variant="outlined"
                    placeholder="بحث..."
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <IconButton>
                                <Search />
                            </IconButton>
                        ),
                    }}
                />

                {/* Right side - Icons: Network (4 small circles), Twisted Back (ArrowBack), Settings */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* أيقونة الشبكة (4 دوائر) */}
                    <IconButton edge="end" sx={{ marginRight: '15px' }}>
                        <GridIcon>
                            <Circle />
                            <Circle />
                            <Circle />
                            <Circle />
                        </GridIcon>
                    </IconButton>
                    
                    {/* أيقونة الرجوع ملتفة */}
                    <TwistedArrowButton edge="end" sx={{ marginRight: '15px' }}>
                        <ArrowBack />
                    </TwistedArrowButton>

                    {/* أيقونة الإعدادات */}
                    <IconButton edge="end">
                        <Settings />
                    </IconButton>
                </div>
            </Toolbar>
        </Header>
    );
};

export default HeaderBar;

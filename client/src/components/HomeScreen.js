import React, { useContext, useEffect, useState } from 'react'
import { GlobalStoreContext } from '../store'
import AuthContext from '../auth';
import ListCard from './ListCard.js'

import MUIDeleteModal from './MUIDeleteModal'
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import FunctionsIcon from '@mui/icons-material/Functions';
import SortIcon from '@mui/icons-material/Sort';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';




/*
    This React component lists all the top5 lists in the UI.
    
    @author McKilla Gorilla
*/
const HomeScreen = () => {
    const { auth } = useContext(AuthContext);
    const { store } = useContext(GlobalStoreContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    // const [searched, setSearched] = useState<string>("");
    // const classes = useStyles();
  
    // const requestSearch = () => {
    //   // store.
    // };
  
    // const cancelSearch = () => {
    //   setSearched("");
    //   requestSearch(searched);
    // };

    const handleOpenHome = () => {
        
    };

    const handleOpenPerson = () => {
        
    };

    const handleOpenGroups = () => {
        
    };

    const handleOpenFunctions = () => {
        
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSortByPublishNew = () => {
        handleMenuClose();
        // store.()
    }

    const handleSortByPublishOld = () => {
        handleMenuClose();
        // store.()
    }

    const handleSortByViews = () => {
        handleMenuClose();
        // store.()
    }

    const handleSortByLikes = () => {
        handleMenuClose();
        // store.()
    }

    const handleSortByDislikes = () => {
        handleMenuClose();
        // store.()
    }

    const menuId = 'primary-sort-list-menu';
    const loggedOutMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleSortByPublishNew}>Publish Date(Newest)</MenuItem>
            <MenuItem onClick={handleSortByPublishOld}>Publish Date(Oldest)</MenuItem>
            <MenuItem onClick={handleSortByViews}>Views</MenuItem>
            <MenuItem onClick={handleSortByLikes}>Likes</MenuItem>
            <MenuItem onClick={handleSortByDislikes}>Dislikes</MenuItem>
        </Menu>
    );

    let editToolbar = "";
    let menu = loggedOutMenu;


    useEffect(() => {
        store.loadIdNamePairs();
    }, []);

    function handleCreateNewList() {
        store.createNewList();
    }
    let listCard = "";
    if (store) {
        listCard = 
            <List sx={{ width: '90%', left: '5%', bgcolor: 'background.paper' }}>
            {
                store.idNamePairs.map((pair) => (
                    <ListCard
                        key={pair._id}
                        idNamePair={pair}
                        selected={false}
                    />
                ))
            }
            </List>;
    }
    return (
        <div id="top5-list-selector">
            <div id="list-selector-heading">
            <IconButton 
                color="primary" 
                aria-label="home"
                id="home-button"
                onClick={handleOpenHome}
            >
                <HomeIcon />
            </IconButton>
            <IconButton 
                color="primary" 
                aria-label="Groups"
                id="groups-button"
                onClick={handleOpenGroups}
            >
                <GroupsIcon />
            </IconButton>
            <IconButton 
                color="primary" 
                aria-label="Person"
                id="person-button"
                onClick={handleOpenPerson}
            >
                <PersonIcon />
            </IconButton>
            <IconButton 
                color="primary" 
                aria-label="Functions"
                id="functions-button"
                onClick={handleOpenFunctions}
            >
                <FunctionsIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search-lists' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Typography
                variant="h6">
                    Sort By
            </Typography> 
            <IconButton 
                color="primary" 
                aria-label="Sort"
                id="sort-list-button"
                onClick={handleProfileMenuOpen}
            >
                <SortIcon />
            </IconButton>
            {
                menu
            }
            </div>
            <div id="list-selector-list">
                {
                    listCard
                }
                <MUIDeleteModal />
            </div>
        </div>)
}

export default HomeScreen;
import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { Typography } from '@mui/material'
import AuthContext from '../auth';


import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
    const { auth } = useContext(AuthContext);
    const { store } = useContext(GlobalStoreContext);
    let text ="";

    function handleCreateNewList() {
        store.createNewList();
    }


    const homeOut = (
        <div id = "top5-statusbar">
        <Fab 
            color="primary" 
            aria-label="add"
            id="add-list-button"
            onClick={handleCreateNewList}
        >
            <AddIcon />
        </Fab>
        <Typography variant="h3">Your Lists</Typography>
        </div>
    );
    
    const homeIn = 
        <div id = "top5-statusbar">
            <Typography variant="h4">{text}</Typography>
        </div>
    
    let home = <div id = "top5-statusbar"></div>

    if (auth.loggedIn){
        home = homeOut;
        // if (go to other screen) {
        //     if (store.currentList)
        //         text = store.currentList.name;
        //     home = homeIn;
        // }
    }
    

    return (
        <div id = "top5-statusbar">
        {
            home
        }
        </div>
    );
}

export default Statusbar;
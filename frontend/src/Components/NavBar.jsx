import { AppBar, Toolbar,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { FaListOl, FaUserPlus } from 'react-icons/fa';
const useStyle =makeStyles({
    header:{
        background:'#DC0831'
    },
    tabs:{
        color:"#FFFFFF",
        textDecorationLine:"none",
        marginRight:20,
        fontSize:20,
        
    },
    icons:{
       
        textDecorationLine:"none",
        marginRight:5,
         
    }
})
const NavBar= ()=>{
    const classes = useStyle();
    return(

        <AppBar className={classes.header} position="static">
           <Toolbar>
            <NavLink className={classes.tabs}  to="./" exact >Sistema nomina carrefour </NavLink>

    <NavLink className={classes.tabs}   to="all" exact > 
     <FaListOl className={classes.icons}  />Listado de usuarios
    </NavLink>

            <NavLink className={classes.tabs}  to="add" exact >
            <FaUserPlus className={classes.icons}  />Añadir usuario
            </NavLink>
           </Toolbar>
        </AppBar>
    )
}

export default NavBar;
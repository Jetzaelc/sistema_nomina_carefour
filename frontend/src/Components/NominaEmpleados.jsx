import { Box,makeStyles, Typography} from '@material-ui/core';
import carreFour from '../Assets/Images/carrefour.png';
import usuario from '../Assets/Images/usuario.png';
const useStyle = makeStyles({
    image:{
        width:'30%',
        height:'20%',
        margin: '20px 0 0 50px'
    },
    component:{
        margin:20
    }

}
)

export function NominaEmpleados(){
    const classes = useStyle();
    return (
    <Box className={classes.component} >
    <center>   <Typography variant="h3" style={{MarginBottom:50}}> Sistema para la gestion de nomina carrefour</Typography> </center> 
      <Box style={{display:'flex'}}>
      {/* <img className={classes.image} src={carreFour}/> */}
       <img className={classes.image} src={usuario}/>   
     </Box> 
     </Box>
      
    )
    }
    
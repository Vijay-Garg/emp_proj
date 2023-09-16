import './App.css';
import { Grid, Paper, styled } from '@mui/material';
import EmployeePersonalInfo from './Components/Employee/EmployeePersonalInfo';
import EmployeeOfficeDetails from './Components/Employee/EmployeeOfficeDetails';
import EmployeeOtherDetails from './Components/Employee/EmployeeOtherDetails';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary  
}));

function App() {
  return (   
    <>
      <Grid className="BgImgHomeFirst" container sx={{height:550, textAlign:'left', margin:2, justifyContent:'center'}}>
        <Grid item xs={12} sm={3} md={3} lg={4} xl={4} sx={{borderRadius:6}}>         
          <Item ><EmployeePersonalInfo /></Item>
        </Grid>
      </Grid>

      <Grid className="BgImgHomeSec" container sx={{height:600,  textAlign:'left', margin:2, justifyContent:'center', }}>
         <Grid item xs={12} sm={3} md={3} lg={4} xl={4}>      
          <Item ><EmployeeOfficeDetails /></Item>      
        </Grid>
      </Grid>

      <Grid className="BgImgHomeThird" container sx={{height:550, textAlign:'left', margin:2, justifyContent:'center'}}>
         <Grid item xs={12} sm={3} md={3} lg={4} xl={4}>      
          <Item ><EmployeeOtherDetails /></Item>      
        </Grid>
      </Grid>
    </>
  );
}

export default App;

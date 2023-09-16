import { Box, Card, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from "@mui/material";
import SaachiImg from "../../Assets/Images/VijayGargImg.jpg";
import BadgeIcon from '@mui/icons-material/Badge';
import { useState } from "react";

export default function EmployeePersonalInfo(){

    const [checkedCharCert, setCheckedCharCert]     = useState();
    const [firstNameValue, setFirstNameValue]       = useState();
    const [midNameValue, setMidNameValue]           = useState();
    const [lastNameValue, setLastNameValue]         = useState();
    const [dob, setDOB]                             = useState();
    const [fatherNameValue, setFatherNameValue]     = useState();
    const [genderValues, setGenderValues]           = useState();
    const [IdentityMarkValue, setIdentityMarkValue] = useState();
    const [marStatus, setMarStatus]                 = useState('None');
    const [checkedMedFit, setCheckedMedFit]         = useState();

    return(    
    <Box sx={{display:'flex', backgroundColor:"#f8f8ff", height:500, width:500, borderRadius:6, border:'7px solid orange'}}>
        <Stack direction='column'>            
            <Typography sx={{textAlign:'center'}}><BadgeIcon /> Employee Personal Information </Typography>   
            <Stack sx={{ display:'flex', backgroundColor:'#f8f8ff', borderRadius:6}} spacing={2} direction='row' marginLeft={2} marginRight={2} marginTop={1}>            
                <Card sx={{ display:'flex', backgroundColor:'#white'}}>
                    <Stack spacing={1} direction='column' >
                        <TextField id="empPerInfoFirstNameId" label="First Name" value={firstNameValue} onChange={(event)=> setFirstNameValue(event.target.value)} size="small"/>
                        <TextField id="empPerInfoMidNameId" label="Middle Name" value={midNameValue} onChange={(event)=> setMidNameValue(event.target.value)} size="small"/>
                        <TextField id="empPerInfoLastNameId" label="Last Name" value={lastNameValue} onChange={(event)=> setLastNameValue(event.target.value)} size="small"/>
                        <TextField id="empPerInfoDOBId" label="Date Of Birth" type='date' value={dob} onChange={(event)=> setDOB(event.target.value)} size="small"/>
                        <TextField id="empPerInfoFatherNameId" label="Father/Mother/Husband Name" value={fatherNameValue} onChange={(event)=> setFatherNameValue(event.target.value)} size="small"/> 
                        <FormControl>                            
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="genderRG"
                                value={genderValues}
                                onChange={(event) => setGenderValues(event.target.value)}
                                row
                                size="small"                                
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="selectLabelID">Marital Status</InputLabel>
                                <Select
                                    labelId="selectLabelId1"
                                    id="selectLabelId"
                                    value={marStatus}
                                    label="Marital Status"
                                    onChange={(event) => setMarStatus(event.target.value)}
                                >
                                    <MenuItem value={'None'}>--Select--</MenuItem>
                                    <MenuItem value={'Married'}>Married</MenuItem>
                                    <MenuItem value={'Unmarried'}>Unmarried</MenuItem>                                    
                                </Select>
                        </FormControl>
                        <TextField label="Identity Mark" variant="standard" size="small" value={IdentityMarkValue} onChange={(event) => setIdentityMarkValue(event.target.value)}/> 
                    </Stack>
                </Card>     
                <Card sx={{ backgroundColor:'white', borderRadius:8, display:'flex', alignItems:'right', border:'4px solid pink'}} >             
                        <img src={SaachiImg} alt="Saachi Garg" height={400} width={250}/>
                </Card> 
            </Stack>
            <Stack sx={{marginLeft:2}} direction='row'>
                <Typography variant="captions" sx={{marginTop:1}}>Attach Docs: </Typography>
                <FormGroup row>
                    <FormControlLabel required control={<Checkbox checked={checkedMedFit} onChange={(event) => setCheckedMedFit(event.target.value)} />} label="Medical Fitness" labelPlacement="start" />
                    <FormControlLabel required control={<Checkbox checked={checkedCharCert} onChange={(event) => setCheckedCharCert(event.target.value)} />} label="Character Certificate" labelPlacement="start" />     
                </FormGroup> 
            </Stack>
        </Stack>
    </Box>
        );    
}
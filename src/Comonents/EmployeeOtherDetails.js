import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function EmployeeOtherDetails(){

    const [heightValue, setHeightValue]                 = useState();
    const [casteValue, setCasteValue]                   = useState();
    const [categoryValue, setCategoryValue]             = useState();
    const [religionValue, setReligionValue]             = useState();
    const [bloodGrpValue, setBloodGrpValue]             = useState();
    const [homeStateValue, setHomeStateValue]           = useState();
    const [homeDistValue, sethomeDistValue]             = useState();
    const [homeOffTypeValue, setHomeOffTypeValue]       = useState();
    const [homeOffNameValue, setHomeOffNameValue]       = useState();
    const [ltcHomeTownValue, setLTCHomeTownValue]       = useState();
    const [nearRailStValue, setNearRailStValue]         = useState();
    const [remarksValue, setRemarksValue]               = useState();

    return(
        <Box sx={{display:'flex', backgroundColor:"#f8f8ff", height:500, width:500, borderRadius:6, border:'7px solid orange'}}>
            <Stack sx={{ display:'flex', backgroundColor:'#f8f8ff', borderRadius:6}} direction='column' spacing={2} marginLeft={2} marginTop={1}>            
                <Typography sx={{textAlign:'center'}}>Other Information </Typography>  
                <Stack direction='row' spacing={2}>
                    <TextField id="empOtherHeightId" label="Height (in cm.)" size="small" type="number" value={heightValue} onChange={(event)=> setHeightValue(event.target.value)} />   
                </Stack>                 
                <Stack direction='row' spacing={2}>
                    <TextField id="empOtherCasteId" label="Caste" size="small" value={casteValue} onChange={(event)=> setCasteValue(event.target.value)} />
                    <TextField id="empOtherCategoryd" label="Category" size="small" value={categoryValue} onChange={(event)=> setCategoryValue(event.target.value)} />
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField id="empOtherReligionId" label="Religion" size="small" value={religionValue} onChange={(event)=> setReligionValue(event.target.value)} />
                    <TextField id="empOtherBloodGrpId" label="Blood Group" size="small" value={bloodGrpValue} onChange={(event)=> setBloodGrpValue(event.target.value)} />
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField id="empOtherHomeStateId" label="Home State" size="small" value={homeStateValue} onChange={(event)=> setHomeStateValue(event.target.value)} />
                    <TextField id="empOtherHomeDistId" label="Home District" size="small" value={homeDistValue} onChange={(event)=> sethomeDistValue(event.target.value)} />
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField id="empOtherHomeOffTypeId" label="Home Office Type" size="small" value={homeOffTypeValue} onChange={(event)=> setHomeOffTypeValue(event.target.value)} />
                    <TextField id="empOtherHomeOffNameId" label="Home Office Name" size="small" value={homeOffNameValue} onChange={(event)=> setHomeOffNameValue(event.target.value)} />
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField id="empOtherLTCHomeTownId" label="LTC Home Town" size="small" value={ltcHomeTownValue} onChange={(event)=> setLTCHomeTownValue(event.target.value)} />
                    <TextField id="empOtherNearRailStId" label="Nearest Railway Station" size="small" value={nearRailStValue} onChange={(event)=> setNearRailStValue(event.target.value)} />
                </Stack>                
                <TextField id="empOtherRemarksId" label="Remarks (if any)" size="small" value={remarksValue} onChange={(event)=> setRemarksValue(event.target.value)} />    
            </Stack>     
        </Box>
    );
}

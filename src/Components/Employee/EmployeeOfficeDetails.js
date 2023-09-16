import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function EmployeeOfficeDetails(){

    const [empIDValue, setEmpIDValue]               = useState();
    const [desigValue, setDesigValue]               = useState();
    const [supervisorValue, setSupervisor]          = useState();
    const [deptValue, setDeptValue]                 = useState();
    const [workLocValue, setWorkLocValue]           = useState();
    const [startDtValue, setStartDtValue]           = useState();
    const [workPhoneValue, setWorkPhoneValue]       = useState();
    const [cellPhoneValue, setCellPhoneValue]       = useState();
    const [emailValue, setEmailValue]               = useState();
    const [salaryValue, setSalaryValue]             = useState();
    

    return(
        <Box sx={{display:'flex', backgroundColor:"#f8f8ff", height:500, width:500, borderRadius:6, border:'7px solid orange'}}>
            <Stack sx={{ display:'flex', backgroundColor:'#f8f8ff', borderRadius:6}} direction='column' spacing={2} marginLeft={2} marginTop={1}>            
                <Typography sx={{textAlign:'center'}}>Job Information </Typography>                                 
                <Stack direction='row' spacing={2}>
                    <TextField id="empOfficeEmpID" label="Employee ID" size="small" value={empIDValue} onChange={(event)=> setEmpIDValue(event.target.value)} />   
                    <TextField id="empOfficeDesigID" label="Designation" size="small" value={desigValue} onChange={(event)=> setDesigValue(event.target.value)} />   
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField id="empOfficeSupervisorID" label="Supervisor" size="small" value={supervisorValue} onChange={(event)=> setSupervisor(event.target.value)} />   
                    <TextField id="empOfficeDepttID" label="Department" size="small" value={deptValue} onChange={(event)=> setDeptValue(event.target.value)} />   
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField id="empOfficeWorkLocID" label="Work Location" size="small" value={workLocValue} onChange={(event)=> setWorkLocValue(event.target.value)} />   
                    <TextField id="empOfficeStartDtID" label="Start Date" type="date" size="small" value={startDtValue} onChange={(event)=> setStartDtValue(event.target.value)} />   
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField id="empOfficeWorkPhoneID" label="Work Phone" type="number" size="small" value={workPhoneValue} onChange={(event)=> setWorkPhoneValue(event.target.value)} />   
                    <TextField id="empOfficeCellPhoneID" label="Cell Phone" type="number" size="small" value={cellPhoneValue} onChange={(event)=> setCellPhoneValue(event.target.value)} />   
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField id="empOfficeEmailID" label="Email" size="small" value={emailValue} onChange={(event)=> setEmailValue(event.target.value)} />   
                    <TextField id="empOfficeSalaryID" label="Salary" type="number" size="small" value={salaryValue} onChange={(event)=> setSalaryValue(event.target.value)} />   
                </Stack>                                
            </Stack>
        </Box>
    );
}

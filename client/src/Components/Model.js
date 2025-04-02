"use client";
import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Gauge } from '@mui/x-charts/Gauge';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Model() {

    const [preperation_level, setPreperationLevel] = useState("");
    const [study_hours, setStudyHours] = useState("");
    const [sleep_hours, setSleepHours] = useState("");
    const [revision_frequency, setRevisionFrequency] = useState("");
    const [exam_stress_level, setExamStressLevel] = useState("");

    return (
        <>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">

                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                        Machine Learning using
                        <strong className="text-indigo-600"> Random Forest </strong>
                        Classifiers
                    </h1>

                    <div className="grid grid-cols-1 text-center gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <Box
                                    component="form"
                                    sx={{ "& .MuiTextField-root": { m: 2, width: '30ch' } }}
                                >
                                    <div>

                                        <FormControl sx={{ m: 2, minWidth: 320 }}>
                                            <InputLabel id="demo-simple-select-helper-label">Preperation Level</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                label="Preperation Level"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>Have to Study</MenuItem>
                                                <MenuItem value={2}>Moderate</MenuItem>
                                                <MenuItem value={3}>Well Prepared</MenuItem>
                                            </Select>
                                            <FormHelperText>Enter your exam Preperation Level</FormHelperText>
                                        </FormControl>

                                        <TextField
                                            helperText="Enter your Study Hours"
                                            id="demo-helper-text-aligned"
                                            label="Study Hours"
                                        />
                                        <TextField
                                            helperText="Enter your Sleeping Hrs"
                                            id="demo-helper-text-aligned"
                                            label="Sleep Hours"
                                        />

                                        <FormControl sx={{ m: 2, minWidth: 260 }}>
                                            <InputLabel id="demo-simple-select-helper-label">Revision Frequency</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                label="Revision Frequency"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>Once in a week</MenuItem>
                                                <MenuItem value={2}>Twice a week</MenuItem>
                                                <MenuItem value={3}>Thrice a week</MenuItem>
                                                <MenuItem value={4}>4 Days</MenuItem>
                                                <MenuItem value={5}>5 Days</MenuItem>
                                                <MenuItem value={6}>6 Days</MenuItem>
                                                <MenuItem value={7}>EveryDay</MenuItem>
                                            </Select>
                                            <FormHelperText>Enter your Revision Frequency</FormHelperText>
                                        </FormControl>

                                        <FormControl sx={{ m: 2, minWidth: 260 }}>
                                            <InputLabel id="demo-simple-select-helper-label">Exam Stress Level</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                label="Exam Stress Level"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>One</MenuItem>
                                                <MenuItem value={2}>Two</MenuItem>
                                                <MenuItem value={3}>Three</MenuItem>
                                                <MenuItem value={4}>Four</MenuItem>
                                                <MenuItem value={5}>Five</MenuItem>
                                            </Select>
                                            <FormHelperText>Enter Exam Stress Level</FormHelperText>
                                        </FormControl>

                                        <Stack marginLeft={6}>
                                            <Button
                                                variant="outlined"
                                                color="success"
                                                sx={{
                                                    width: '50ch',
                                                    '&:hover': {
                                                        backgroundColor: 'green',
                                                        color: 'white',
                                                        borderColor: 'green'
                                                    }
                                                }}>
                                                Success
                                            </Button>
                                        </Stack>
                                    </div>
                                </Box>

                            </div>
                        </div>

                        <div>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
                                <Gauge width={200} height={200} value={50} />
                            </Stack>

                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                        Word of the Day
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Model;
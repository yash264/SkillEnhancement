"use client";
import React from "react";
import Input from "../Layouts/Input";
import BasicSelect  from "../Layouts/Select";
import ColorButton from "../Layouts/Buttons";
import ChartsOverview from "../Layouts/Charts";

function Model() {
    
    return (
        <>
            <Input />
            <BasicSelect />
            <ColorButton />
            <ChartsOverview />
        </>
    );
}

export default Model;
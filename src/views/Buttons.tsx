import React from "react"
import Button from "../components/Button/Index";

export default function Buttons(){
    return(
        <React.Fragment>
            <Button text="Default"/>
            <Button text="Outline" variant="outline"/>
            <Button text="Text" variant="text"/>
            <Button text="Disabled" isDisabled={true}/>
            <Button text="Text Disa" variant="text" isDisabled={true}/>
            <Button text="Disa Shad" disableShadow={true}/>
            <Button text="Has start icon" startIcon="local_grocery_store"/>
            <Button text="Has end icon" endIcon="local_grocery_store"/>
            <Button text="Size sm" size="sm"/>
            <Button text="Size md" size="md"/>
            <Button text="Size lg" size="lg"/>
            <Button text="Color default" size="lg" color="default"/>
            <Button text="Color primary" size="lg" color="primary"/>
            <Button text="Color secondary" size="lg" color="secondary"/>
            <Button text="Color danger" size="lg" color="danger"/>
        </React.Fragment>
    );
};
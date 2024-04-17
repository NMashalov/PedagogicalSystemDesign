//import { useState, useEffect } from "react";
import {
    useLoaderData, useNavigate,
} from "react-router-dom";


import Markdown from 'react-markdown'
import { useState } from "react";

import Accordion from 'react-bootstrap/Accordion';
import { Button, Stack } from "react-bootstrap";
import { allBriefs } from "./briefs";
import { Routes } from "../../../datastruct/pages";


export function MarkdownRender({markdown}: {markdown: string}){

    const [textMD] = useState(markdown)
    
    return (
        <Markdown>{textMD}</Markdown>
    )
}


export function StrategyPage(){

    const markdown = useLoaderData() as string;

    return (
        <MarkdownRender markdown={markdown}/>
    )
}

export function AllDescriptions(){

    const [briefs] = useState(allBriefs)
    const navigate = useNavigate()

    return (
        <Accordion>
            {Object.entries(briefs).map(
                ([key,value]) => {
                    return (
                        <Accordion.Item eventKey={key}>
                            <Accordion.Header>{key}</Accordion.Header>
                            <Accordion.Body>
                                <Stack className="col-md-5 mx-auto">
                                    <div>{value}</div>
                                    <Button onClick={()=> navigate(`/${Routes.description}/${key}`)}>К статьей</Button>
                                </Stack> 
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                }
            )
            }
        </Accordion>
    )
}
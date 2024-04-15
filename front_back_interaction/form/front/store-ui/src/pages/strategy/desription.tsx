//import { useState, useEffect } from "react";
import { IStrategy, LoadMd } from "../../datastruct/strats";
import {
    LoaderFunction,
    useLoaderData,
} from "react-router-dom";


import Markdown from 'react-markdown'

export const mdLoader : LoaderFunction = ({params}: LoadMd) => {
    console.log(params.mdName)
    const mdText = fetch(`http://127.0.0.1:8000/event/${params.appId}`).
        then(data => data.text()).
        catch(e => console.log(e))
    return {mdText}
};


export function MarkdownRender(){
    const markdown = useLoaderData() as string;

    return (
        <Markdown>{markdown}</Markdown>
    )
}





export function StrategyPage(prop: IStrategy){

    return (
        <MarkdownRender/>
    )

}
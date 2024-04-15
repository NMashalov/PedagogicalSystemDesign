import { Tooltip,Button, Image, Stack, Tag, Text, Flex } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useNavigate } from "react-router";
import { Difficulty, Media } from "../structs/games";
const Hint = ({hint} : {hint:string}) => (
    <Tooltip id="button-tooltip">
      {hint}
    </Tooltip>
);


interface IHintButton{
    hintText: string;
    buttonText: string;
    navigateLink: string;
}



function HintButton(buttonProps :IHintButton) {

    const navigate = useNavigate()

    return (
        <Tooltip label={<Hint hint={buttonProps.hintText}/>}>
            <Button onClick={()=> navigate(buttonProps.navigateLink)}variant="success">
                {buttonProps.buttonText}
            </Button>
        </Tooltip>
    );
}


function TagGroup({tags}:{tags: Array<string>}){

    return(
        <Flex justifyContent={'center'}>
            {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
            ))}
        </Flex>
    )

}

export interface IGameCard {
    image: string;
    title: string;
    difficulty: Difficulty;
    media: Media[];
    description: string;
    navigateLink: string;
    hintText?: string;
    [key: string]: unknown;
}


export const GameCard = (cardProps : IGameCard) => { 
    return (
        <Card  bgGradient='linear(to-b, white, green.500@0.3)' style={{ width: '18rem' }}>
            <CardHeader>
                <Text textAlign='center'>
                    {cardProps.title}
                </Text>
            </CardHeader>
            <CardBody>
                <Stack>
                    <Image
                        src={cardProps.image} 
                        borderRadius='lg'
                    />
                    <TagGroup tags={[cardProps.difficulty, ...cardProps.media]}/>
                    <Text  textAlign='center'>
                        {cardProps.description}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Flex  h={16}  alignItems='center' justifyContent='space-between'>
                    <HintButton
                        navigateLink={cardProps.navigateLink}
                        hintText='Узнать про правила игры'
                        buttonText='Правила'
                    />
                    <HintButton
                        navigateLink={cardProps.navigateLink}
                        hintText='Переход к описанию игры'
                        buttonText='Играть'
                    />
                </Flex>
            </CardFooter>
        </Card>
    )
}
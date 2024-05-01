import { useState } from "react";
import { Message, Messag } from "./message";

interface Mess

interface ChatProps{
    messages:
}
function ChatLayout(props: ChatProps){

    const [msgs, setMsgs] = useState(null)

    return (
        <VStack>
            {messages.map((message)  => <Message text={message.}>)}
        </VStack>   
    )

}


export function Chat(){

    
    const [{ data, loading, error }, refetch] = useAxios(
        'https://reqres.in/api/users?delay=1'
      )
    const [messages, setMessages] = useState();
      const [inputMessage, setInputMessage] = useState("");

    return {


    }

      
}
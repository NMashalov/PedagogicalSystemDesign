import { AlertDialog, AlertDialogOverlay, AlertDialogBody, AlertDialogFooter, Button, } from "@chakra-ui/react";
import { useState, useRef } from "react";


function chatDelete(){


}

export const DeleteWithConfirmation = () => {
    
    const cancelRef = useRef<undefined>();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                Delete
            </Button>
            <AlertDialogOverlay>
                <AlertDialogBody> 
                    <AlertDialog 
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={()=>setIsOpen(false)}
                    >
                        Are you sure you want to delete
                    </AlertDialog>
                    <AlertDialogFooter>
                        <Button onClick={()=>setIsOpen(false)}>
                            Close
                        </Button>
                        <Button onClick={()=>chatDelete()}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogBody>
            </AlertDialogOverlay>
        </>
    )
}

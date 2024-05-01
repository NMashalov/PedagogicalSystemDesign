import { Button, Modal, ModalContent,ModalOverlay, useDisclosure } from "@chakra-ui/react"




function Helper() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>

  
          </ModalContent>
        </Modal>
      </>
    )
  }
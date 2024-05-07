import {
    AlertDialog, AlertDialogBody,
    AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button, useColorMode, useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";

export default function DeletionAlertButton(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()


    return (
        <>
            <Button colorScheme={'red'} onClick={() => {onOpen(); }}  rounded={'full'}>Delete</Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered={true}
            >

                <AlertDialogOverlay  >
                    <AlertDialogContent  >
                        <AlertDialogHeader fontSize='lg' fontWeight='bold' >
                            <h1 className={'text-extend-08 heading-m mt-3 dark:text-white'}>Confirm Deletion</h1>
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <p className={'text-extend-06'}>
                                Are you sure you want to delete invoice #{props.invoiceId}.  This action cannot be undone.

                            </p>
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose} rounded={'full'}>
                                <p className={'text-extend-07'}>Cancel</p>
                            </Button>
                            <Button colorScheme='red' onClick={onClose} ml={3} rounded={'full'}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
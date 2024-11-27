import React from "react"
import handImages from "../public/handImages.svg"
import {
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Link,
} from "@chakra-ui/react"

export default function About() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Button onClick={onOpen} colorScheme="orange">
        Need a break?
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered id="modal">
        <ModalOverlay />
        <ModalContent
          backgroundColor="white"
          bg="url('/modal_bg.svg')"
          bgSize="cover"
          bgRepeat="no-repeat"
          borderRadius="22px"
          p={4}
          maxW="700px" // Set the maximum width of the modal
          w="110%" // Set the width to 90% of the viewport width
          minH="480px" // Set a minimum height for the modal
        >
          {/* Updated modal header */}
          <ModalHeader
            sx={{
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "39.31px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "var(--Blue, #5AB6E2)", // Updated text color to match requirement
            }}

            id="modal-header"
          >
            Take a Quick Break!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Updated main text */}
            <Box mb={4} textAlign="center">
              <Text fontSize="md">
                You've just completed five exercises—great job!
              </Text>
              <Text fontSize="md">
                To avoid hand strain and keep your fingers flexible,
              </Text>
              <Text fontSize="md">
                it's important to take a moment to stretch your hands.
              </Text>
            </Box>

            {/* Video recommendation section */}
            <Text fontSize="md" fontWeight="bold" mb={2}>
              Try these Hand Yoga Exercises:
            </Text>

            {/* Hand Yoga Video Thumbnails */}
            {/* <Box display="flex" gap={4} overflowX="scroll">
              {[1, 2, 3].map((_, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  minW="250px"
                  bg="white"
                  boxShadow="md"
                >
                  
                  <Link href="https://www.youtube.com/watch?v=LehkTdGXxjc&t=75s&pp=ygUJSEFORCBZT0dB" isExternal>
                    <Image src={'needabreak_thumbnail.png'} alt="Hand Yoga Thumbnail" />
                  </Link>
                  <Box p={2}>
                    
                  </Box>
                </Box>
              ))}
            </Box>
          </ModalBody> */}

          {/* Hand Yoga Video Thumbnails with Scroll Bar */}
          <Box
              display="flex"
              overflowX="auto" // Allow horizontal scrolling
              gap={4}
              pb={4} // Adding some padding at the bottom for visual separation
              sx={{
                '&::-webkit-scrollbar': {
                  height: '8px', // Set the height of the scrollbar
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1', // Track color
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#888', // Thumb color
                  borderRadius: '10px', // Make it round
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#555', // Thumb hover color
                },
              }}
            >
              {[1, 2, 3].map((_, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  minW="250px"
                  bg="white"
                  boxShadow="md"
                >
                  <Link
                    href="https://www.youtube.com/watch?v=LehkTdGXxjc&t=75s&pp=ygUJSEFORCBZT0dB"
                    isExternal
                  >
                    <Image
                      src={'needabreak_thumbnail.png'}
                      alt="Hand Yoga Thumbnail"
                    />
                  </Link>
                </Box>
              ))}
            </Box>
          </ModalBody>
          
          {/* Close button */}
          <ModalFooter>
            {/* <Button onClick={onClose} colorScheme="orange">
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>

        {/* <ModalContent>
          <ModalHeader>American Sign Language (ASL)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="sm">
              American Sign Language (ASL) is a visual language that serves as
              the predominant sign language of Deaf communities in the United
              States and most of Canada.<br></br>
              Here's the list of ASL hand gestures for alphabet.
            </Text>
            <Image src={handImages} />
            <Text fontSize="sm">
              This sign language illustration is created by{" "}
              <Link
                href="https://thenounproject.com/pelodrome/"
                isExternal
                color="orange.300"
              >
                Pelin Kahraman
              </Link>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent> */}
      </Modal>
    </div>
  )
}

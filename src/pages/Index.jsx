import { ChakraProvider, Box, Text, VStack, HStack, Input, Button, NumberInput, NumberInputField, useToast } from "@chakra-ui/react";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handlePaymentSubmission = () => {
    toast({
      title: "Payment Successful",
      description: "A payment of 48€ has been processed to the bank account.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Bank Payment Submission
            </Text>
          </Box>
          <Box>
            <HStack>
              <FaMoneyCheckAlt size="24px" />
              <Text>Enter bank account details</Text>
            </HStack>
            <VStack mt={4} spacing={4}>
              <Input placeholder="Account holder name" />
              <Input placeholder="Bank name" />
              <Input placeholder="Account number" />
              <NumberInput defaultValue={48} precision={2} clampValueOnBlur={false}>
                <NumberInputField placeholder="Amount (€)" />
              </NumberInput>
            </VStack>
          </Box>
          <Button colorScheme="blue" onClick={handlePaymentSubmission}>
            Submit Payment
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;

import React from "react";
import { Box, VStack, Heading, Text, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.50" minH="100vh" py={12}>
      <VStack spacing={8} maxW="2xl" mx="auto" px={4}>
        <Heading as="h1" size="2xl" fontFamily="serif" color="gray.700">
          My Blog
        </Heading>

        <HStack spacing={8} color="gray.500">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </HStack>

        <VStack align="start" spacing={4} maxW="lg">
          <Heading size="xl" fontFamily="serif" color="gray.800">
            Blog Post Title
          </Heading>
          <Text color="gray.600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie leo id purus faucibus, sit amet tempor odio tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
          <Text fontStyle="italic" color="gray.500">
            Posted on January 1, 2023
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;

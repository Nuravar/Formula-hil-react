import React from 'react';
import { Box, Flex, Heading, Image, HStack, VStack, Input, Text, Checkbox, Button, Link, IconButton, Spacer} from '@chakra-ui/react';
import logo from "../assets/logo.png" 
import { MdOutlineExitToApp, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const formulaRed = "#AA1F26"

const Dashboard = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleContinue = () => {
        // Perform any necessary logic before navigating
        // For now, just navigate to the "/dashboard" route
        navigate('/');
    };
  return (
    <VStack h="100vh" p="3">
        <HStack h="3%" w="100%" justify="space-between">
            <Image h="100%" src={logo} />
            <Heading size={{base:"xs", lg:"sm"}} textColor="black">MAC Formula Electric</Heading>
            <Heading size={{base:"2xs", lg:"sm"}} pl="5%" textColor={formulaRed} display={{base:"none", md:"flex"}}>HIL Interface</Heading>
            <Spacer/>
            <IconButton
                icon={<MdOutlineExitToApp />}
                h="100%"
                aria-label='Exit'
                bgColor="black"
                textColor="white"
                _hover={{ backgroundColor: 'gray' }}
                onClick={handleContinue}
                />
        </HStack>
        <HStack mt="10px" h="3%" w="100%" justify="space-between">
        <IconButton icon={<MdKeyboardArrowLeft />} h="100%" aria-label='left' variant="ghost"/>
        <Button leftIcon={<MdDashboard color={formulaRed}/>} variant="ghost" bgColor="#F9F4F4" _hover={{bgColor:"#F1E4E4"}} borderRadius="0px">Dashboard</Button>
        <Spacer/>
        <IconButton icon={<MdKeyboardArrowRight />} h="100%" aria-label='left' variant="ghost"/>
        </HStack>
        <VStack h="100%" w="100%" bgColor="#F9F4F4" >
            <Text>sdf</Text>
        </VStack>
    </VStack>
  );
};

export default Dashboard;
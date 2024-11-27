import React from "react"
import {
  Text,
  Image,
} from "@chakra-ui/react"
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const navigateToExternal = () => {
    router.push('http://localhost:5173/');
  };

  return (
    <div id="header">
        <Image className="img" src='/logo.svg' onClick={navigateToExternal}/>
        <Text id="text" color="black" textStyle="7xl" fontWeight="bold">Chapter 1-2 | Alphabet</Text>
        <Image className="img" ml={8} src='/profile.svg' />
    </div>
  )
}

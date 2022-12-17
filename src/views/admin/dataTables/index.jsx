/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports

import React from "react";
import { Image, Flex, Text, Box, Container } from "@chakra-ui/react";
export default function Settings() {
  // Chakra Color Mode
  return (
  
    <Box boxSize="lg" mt={40} >
      <Flex  gap={20}>
        <Box >
          <Image
         
            borderRadius={20}
            src="https://media.licdn.com/dms/image/D4D03AQGXrH7puFFsdg/profile-displayphoto-shrink_800_800/0/1667694317117?e=1676505600&v=beta&t=lnnAkyK7jVxs_9Jlk-Qh1KU9zpCPh5uT22TFr5tVfPI"
            alt="Horizon UI"
          />
          <Text width={300} textAlign={"center"} fontSize={"30"} mt={5}>Ahmet Karademir</Text>
        </Box>
        <Box>
          <Image
            borderRadius={20}
            src="https://media.licdn.com/dms/image/C4D03AQGkNEb0JV1t5A/profile-displayphoto-shrink_800_800/0/1650830040306?e=1676505600&v=beta&t=TniHhZxaXqooMvDpUq5EweFGegfnOpCL3Y2GDR5Ojzc"
            alt="Horizon UI"
          />
          <Text width={300} textAlign={"center"} fontSize={"30"} mt={5}>Emre Bağbakan</Text>
        </Box>
        <Box>
          <Image
            borderRadius={20}
            src="https://media.licdn.com/dms/image/D4D03AQHmwtredxgILw/profile-displayphoto-shrink_800_800/0/1669049184805?e=1676505600&v=beta&t=UltTBquXyegiqqK3uNiGxdLret6vo8Y3MrYSHTmyIZM"
            alt="Horizon UI"
          />
          <Text width={300} textAlign={"center"} fontSize={"30"} mt={5}>Berkay İşler</Text>
        </Box>
        </Flex>
        <Flex mt={50}  gap={20}>
        <Box>
          <Image
            borderRadius={20}
            src="https://media.licdn.com/dms/image/C4D03AQFhVXXi0z-4EQ/profile-displayphoto-shrink_800_800/0/1626177610196?e=1676505600&v=beta&t=OuwtakEc8q1vm19iFUmoOHEbcydS1ZyqnxMvtZQ9FvQ"
            alt="Horizon UI"
          />
          <Text width={300} textAlign={"center"} fontSize={"30"} mt={5}>Furkan Kaya</Text>
        </Box>
        <Box>
          <Image
            borderRadius={20}
            src="https://media.licdn.com/dms/image/C4D03AQGWwIpSs157vw/profile-displayphoto-shrink_800_800/0/1594906023878?e=1676505600&v=beta&t=JYwhIeb8Npaw14z03Qj8DJXXQ4YlwDJ5WRHrlmTCMA4"
            alt="Horizon UI"
          />
          <Text width={300} textAlign={"center"} fontSize={"30"} mt={5}>M. Baha Ağaç</Text>
        </Box>
        <Box>
          <Image
            borderRadius={20}
            src="https://media.licdn.com/dms/image/D4D03AQHAU2bCi0Erbg/profile-displayphoto-shrink_800_800/0/1667676380910?e=1676505600&v=beta&t=BqmREOeHtFPWZiqhIPDt5RlCMjRIM9AxS7keIwRl8is"
            alt="Horizon UI"
          />
          <Text width={300} textAlign={"center"} fontSize={"30"} mt={5}>Uygar Yavuz</Text>
        </Box>
        </Flex>
        
     
    </Box>
    
  );
}

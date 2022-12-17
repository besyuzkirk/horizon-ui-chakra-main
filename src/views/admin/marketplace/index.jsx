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

import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        >
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
              List of most-played mobile games
              </Text>
              
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <NFT
                name='Subway Surfers'
                author='By SYBO Games'
                bidders={[
                  
                ]}
                image={"https://www.guvenlioyna.org.tr/dosya/6Ynea.jpg"}
                currentbid='0.91 ETH'
                download='#'
              />
              <NFT
                name='PUBG Mobile'
                author='By Tencent / Krafton'
                bidders={[
                 
                ]}
                image={"https://i4.hurimg.com/i/hurriyet/75/750x422/5ab0f3cf0f25451edccb06c0.jpg"}
                currentbid='0.91 ETH'
                download='#'
              />
              <NFT
                name='Pokemon Go'
                author='By 	Niantic / The Pokémon Company'
                bidders={[
                 
                ]}
                image={"https://ichef.bbci.co.uk/news/640/cpsprodpb/17008/production/_90361249_pokemon.jpg"}
                currentbid='0.91 ETH'
                download='#'
              />
            </SimpleGrid>
          
            <SimpleGrid
            mt={50}
              columns={{ base: 1, md: 3 }}
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
              <NFT
                name='Mobile Legends: Bang Bang'
                author='By Peter Will'
                bidders={[
     
                ]}
                image={"https://www.savunmatr.com/images/resize/90/637x332/haberler/2022/11/mobile_legendse_siber_saldiri_h19166_ba5a3.png"}
                currentbid='0.91 ETH'
                download='#'
              />
              <NFT
                name='Garena Free Fire'
                author='By Moonton'
                bidders={[
                
                ]}
                image={"https://playerbros.com/wp-content/uploads/2021/02/Garena-Free-Fire.jpg"}
                currentbid='0.91 ETH'
                download='#'
              />
              <NFT
                name='Candy Crush Saga'
                author='By Garena'
                bidders={[
            
                ]}
                image={"https://www.king.com/images/share/banners/candycrush.png?_v=kmoqjd"}
                currentbid='0.91 ETH'
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}

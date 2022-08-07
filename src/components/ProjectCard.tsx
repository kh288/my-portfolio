import React from 'react';
import {
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Link,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Text,
  Image
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type props = {
  title: string;
  summary: string;
  frontendList: Array<string>;
  backendList: Array<string>;
  deployment: string;
  github: string;
  imageUrl: string;
};

function ProjectCard({
  title,
  summary,
  frontendList,
  backendList,
  deployment,
  github,
  imageUrl
}: props) {
  const margin = 3;
  const padding = 3;
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <GridItem
      colSpan={1}
      bg={card}
      rounded="md"
      padding={padding}
      border="solid 1px"
      borderColor={borderColor}
      marginBottom={margin}
    >
      <Heading marginBottom={margin} textAlign="center" size="lg">
        {title}
      </Heading>
      <Text>{summary}</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={padding} marginTop={margin}>
        <GridItem colSpan={1}>
          <Heading paddingLeft="3" size="md">
            Frontend
          </Heading>
          <Center>
            <UnorderedList>
              {frontendList.map((frontendListItem) => (
                <ListItem>{frontendListItem}</ListItem>
              ))}
            </UnorderedList>
          </Center>
        </GridItem>
        <GridItem colSpan={1}>
          <Heading paddingLeft="3" size="md">
            Backend
          </Heading>
          <Center>
            <UnorderedList>
              {backendList.map((backendListItem) => (
                <ListItem>{backendListItem}</ListItem>
              ))}
            </UnorderedList>
          </Center>
        </GridItem>
        <Center>
          <Link href={deployment} isExternal>
            <Button colorScheme="purple">
              Deployment
              <ExternalLinkIcon ml={margin} />
            </Button>
          </Link>
        </Center>
        <Center>
          <Link href={github} isExternal>
            <Button colorScheme="blue">
              Github <ExternalLinkIcon ml={margin} />
            </Button>
          </Link>
        </Center>
      </Grid>
      <Image src={imageUrl} />
    </GridItem>
  );
}

export default ProjectCard;

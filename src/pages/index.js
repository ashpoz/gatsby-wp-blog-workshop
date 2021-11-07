import * as React from 'react';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import { Container, Stack, Box, Heading, Text, Link } from '@chakra-ui/react';

const HomePage = () => {

  const data = useStaticQuery(graphql`
  {
    allWpPost {
      nodes {
        id
        title
        excerpt
        uri
      }
    }
  }
  `)

  const { allWpPost } = data;

  return (
    <Container maxW='xl' centerContent>
      <Heading>Gatsby Blog</Heading>
      <Stack>
        {allWpPost.nodes.map( ({id, title, excerpt, uri}) => (
          <Box key={id}>
            <Heading>{title}</Heading>
            <Text>
              <span dangerouslySetInnerHTML={{__html: excerpt}}></span>
            </Text>
            <Link as={GatsbyLink} to={uri}>Read More ›</Link>
          </Box>
        ))}
      </Stack>
    </Container>
  )
}

export default HomePage;
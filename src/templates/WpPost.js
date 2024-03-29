import * as React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { Container, Heading, Text, Link } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

const WpPost = ({ data }) => {
  console.log(data);
  const { wpPost } = data;

  return (
    <>
      <Helmet>
        <meta name='description' content={wpPost?.seo?.metaDesc} />
      </Helmet>
      <Container maxW='xl' centerContent>
        <Heading>{wpPost.title}</Heading>
        <Text>
          <span dangerouslySetInnerHTML={{ __html: wpPost.content }}></span>
        </Text>
        <Link as={GatsbyLink} to='/'>Back to blog</Link>
      </Container>
    </>
  )
}

export default WpPost;

export const query = graphql`
  query PostById($id: String) {
    wpPost(id: {eq: $id}) {
      id
      title
      content
      seo {
        metaDesc
      }
    }
  }
`
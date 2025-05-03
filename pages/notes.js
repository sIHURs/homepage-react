import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Editor from '../components/editor'

// TODO: add a markdown editor

// try codemirror @yifan 
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/mode/javascript/javascript';
// import { Editor } from 'codemirror';

const Notes = () => (
  <Layout title="Notes">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Notes - Markdown Editor
      </Heading>

      <Editor />
    </Container>
  </Layout>
)

export default Notes
export { getServerSideProps } from '../components/chakra'

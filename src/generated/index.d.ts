
declare module '*/test.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getUser: DocumentNode;

  export default defaultDocument;
}
    
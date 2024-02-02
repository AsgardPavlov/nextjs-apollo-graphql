import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './gql/schema.graphql',
  generates: {
    './gql/types/': {
      preset: 'client-preset',
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
}

export default config

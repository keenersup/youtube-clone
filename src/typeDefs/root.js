import { gql } from 'apollo-server'

export default gql`
    directive @auth on FIELD_DEFINITION
    directive @guest on FIELD_DEFINITION
    directive @admin on FIELD_DEFINITION
    type Query{
        root: String
    }
    type Mutation{
        root: String
    }
`
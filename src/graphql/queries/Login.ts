import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    user(email: $email, password: $password) {
      token
    }
  }
`

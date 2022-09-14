import {gql} from "@apollo/client"

export const LOGIN = gql`
  mutation loginUser($user: loginInput!) {
    login(user: $user) {
      userId
      firstName
      lastName
      email
      token
    }
  }s
`;
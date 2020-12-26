import { gql } from "@apollo/client";

export const GetUsers = gql`
query MyQuery {
  TblUserLogin(where: {Status: {_eq: "Active"}, _and: {deleted: {_eq: false}}}) {
    UserId
    Password
  }
}
`;
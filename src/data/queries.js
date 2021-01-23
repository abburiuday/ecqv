import { gql } from "@apollo/client";

//-----------------Admin Module-------------

//----------------User Management------------

export const Get_User_By_UserId = gql`
query getUserByUerId($UserId: String_comparison_exp = {}) {
  UserProfile(where: {UserId: $UserId}) {
    Department {
      DepartmentName
    }
    DepartmentId
    EmailId
    EmployeeId
    FirstName
    LastName
    CreatedUser
    CreatedDate
    UpdatedUser
    UpdatedDate
    DBAction
    UserLogin {
      ActiveUser
      LastLogin
      Password
      TempPwdFlag
    }
  }
}
`;

export const Get_All_ActiveUsers = gql`
  query getAllUsers {
    UserProfile(where: {DBAction: {_neq: 3}, UserLogin: {ActiveUser: {_eq: true}}}) {
      DepartmentId
      Department {
        DepartmentName
      }
      EmailId
      EmployeeId
      FirstName
      LastName
      UserId
      UpdatedUser
      UpdatedDate
      CreatedUser
      CreatedDate
      UserLogin {
        ActiveUser
        LastLogin
        Password
        TempPwdFlag
      }
    }
  }
`;

export const Get_All_Departments = gql`
  query getAllDepartments {
    Department {
      DepartmentName
      Id
    }
  }
`;



export const INSERT_NEW_USER = gql`
mutation InserNewUser($CreatedUser: String = "", $DepartmentId: Int = 10, $EmailId: String = "", $EmployeeId: String = "", $FirstName: String = "", $LastName: String = "", $Password: String = "", $UserId: String = "") {
  insert_UserProfile_one(object: {CreatedUser: $CreatedUser, DepartmentId: $DepartmentId, EmailId: $EmailId, EmployeeId: $EmployeeId, FirstName: $FirstName, LastName: $LastName, UserLogin: {data: {Password: $Password, UserId: $UserId}}}) {
    FirstName
    LastName
    UserId
  }
}
`;

//----------------User Management Modify Login------------

export const Get_All_Users = gql`
  query getAllUsers {
    UserProfile(where: {DBAction: {_neq: 3}}) {
      DepartmentId
      Department {
        DepartmentName
      }
      EmailId
      EmployeeId
      FirstName
      LastName
      UserId
      UpdatedUser
      UpdatedDate
      CreatedUser
      CreatedDate
      UserLogin {
        ActiveUser
        LastLogin
        Password
        TempPwdFlag
      }
    }
  }
`;

export const Get_Deleted_Users = gql`
  query getAllUsers {
    UserProfile(where: {DBAction: {_eq: 3}}) {
      DepartmentId
      Department {
        DepartmentName
      }
      EmailId
      EmployeeId
      FirstName
      LastName
      UserId
      UpdatedUser
      UpdatedDate
      CreatedUser
      CreatedDate
      UserLogin {
        ActiveUser
        LastLogin
        Password
        TempPwdFlag
      }
    }
  }
`;


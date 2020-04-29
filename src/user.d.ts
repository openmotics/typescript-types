declare module 'openmotics-types/user' {
  import { Acl } from "openmotics-types/base";

  /**
   * 
   * A User object represents user data.
   * 
   * @param email - The email of user
   * @param username - The username of user
   * @param first_name - The first name of user
   * @param last_name: The last name of user
   */

  export interface UserApi extends Acl {
    id: number;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
  }

  /**
   * 
   * A User object represents user data.
   * 
   * @param id - The user id
   * @param email - The email of user
   * @param username - The username of user
   * @param firstName - The first name of user
   * @param lastName: The last name of user
   */

  export interface User {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
  }
}
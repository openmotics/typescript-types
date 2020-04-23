/**
 *
 * A User object represents user data.
 *
 * @param email - The email of user
 * @param username - The username of user
 * @param first_name - The first name of user
 * @param last_name: The last name of user
 */
import { Acl } from "../base";
export interface UserApi extends Acl {
    id: number;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
}

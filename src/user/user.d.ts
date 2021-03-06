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

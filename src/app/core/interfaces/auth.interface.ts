export interface SignIn {
    username: string;
    password: string;
    rememberUser: boolean
}
export interface AuthSuccess extends UserData {
    token: string
}
export interface UserData {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
}
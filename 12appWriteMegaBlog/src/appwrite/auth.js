import conf from "../conf/conf.js"

import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if(userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const AuthService = new AuthService();

export default AuthService;














// ---------- we are not exposing all this logic in ui so ----------

// const client = new Client()
//     .setProject('<PROJECT_ID>') // Your project ID
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1');

// const account = new Account(client);

// try {
//     const user = await account.create({
//         userId: '[USER_ID]',
//         email: 'email@example.com',
//         password: '<Password>'
//     });
//     console.log(user)
// } catch (e){
//     console.error(e)
// }
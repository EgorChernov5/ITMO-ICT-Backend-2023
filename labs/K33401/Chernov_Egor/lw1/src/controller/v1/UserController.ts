import { Request, Response } from "express"

class UserController {
    get_all = async (request: Request, response: Response) => {
        const todo = "get list of users from Service"

        return response.send(todo)
    }

    get = async (request: Request, response: Response) => {
        const todo = "get user from Service"

        return response.send(todo)
    }

    post_create_user = async (request: Request, response: Response) => {
        const todo = "create user in Service, create jwt, create portfolio in Service"

        return response.send(todo)
    }

    post_login_user = async (request: Request, response: Response) => {
        const todo = "auth and get user from DB, auth jwt"

        return response.send(todo)
    }

    delete = async (request: Request, response: Response) => {
        const todo = "drop row from DB"

        return response.send(todo)
    }

    get_current_user = async (request: any, response: any) => {
        return response.send(request.user)
    }

    refreshToken = async (request: any, response: any) => {
        const todo = "check user, generate new refresh jwt token"

        return response.send(todo)
    }
}

export default UserController
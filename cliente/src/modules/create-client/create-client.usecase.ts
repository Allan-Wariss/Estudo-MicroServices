type CreateClientRequest = {
    name: String
    password: String
    email: String
    phone: String
}

export class CreateClientUseCase {
    constructor() {}

    async execute(data: CreateClientRequest){

    }

}

class paymentService{
    
    static async createOrder(args){
        return await APICaller.post('/api/paymentService.createOrder', args||{});
    }
    
    static async getOrders(args){
        return await APICaller.post('/api/paymentService.getOrders', args||{});
    }
    
}

class tradeService{
    
    static async createOrder(args){
        return await APICaller.post('/api/tradeService.createOrder', args||{});
    }
    
    static async getOrder(args){
        return await APICaller.post('/api/tradeService.getOrder', args||{});
    }
    
    static async listTradeOrders(args){
        return await APICaller.post('/api/tradeService.listTradeOrders', args||{});
    }
    
}

class roleService{
    
    static async doesUserHaveAnyRole(args){
        return await APICaller.post('/api/roleService.doesUserHaveAnyRole', args||{});
    }
    
    static async doesUserHaveAllRoles(args){
        return await APICaller.post('/api/roleService.doesUserHaveAllRoles', args||{});
    }
    
}

class userService{
    
    static async updateUserPasswordHint(args){
        return await APICaller.post('/api/userService.updateUserPasswordHint', args||{});
    }
    
    static async getUserPasswordHint(args){
        return await APICaller.post('/api/userService.getUserPasswordHint', args||{});
    }
    
    static async register(args){
        return await APICaller.post('/api/userService.register', args||{});
    }
    
    static async login(args){
        return await APICaller.post('/api/userService.login', args||{});
    }
    
    static async getUser(args){
        return await APICaller.post('/api/userService.getUser', args||{});
    }
    
    static async logout(args){
        return await APICaller.post('/api/userService.logout', args||{});
    }
    
    static async sendLoginCode(args){
        return await APICaller.post('/api/userService.sendLoginCode', args||{});
    }
    
    static async loginByCode(args){
        return await APICaller.post('/api/userService.loginByCode', args||{});
    }
    
    static async sendLoginUrl(args){
        return await APICaller.post('/api/userService.sendLoginUrl', args||{});
    }
    
    static async isUserJwtOk(args){
        return await APICaller.post('/api/userService.isUserJwtOk', args||{});
    }
    
}

class userServiceWeb3Trait{
    
    static async loginByWalletAddress(args){
        return await APICaller.post('/api/userServiceWeb3Trait.loginByWalletAddress', args||{});
    }
    
}




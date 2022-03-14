class ServerError extends Error {
  constructor(error?: Error) {
    super("Server failed");
    this.name = "ServerError";
    this.stack = error?.stack;
  }
}

class UnauthorizedError extends Error {
    constructor () {
        super('Unauthorized')
        this.name = 'UnauthorizedError'
    }
}

class ForbiddenError extends Error {
    constructor () {
        super('Forbidden')
        this.name = 'ForbiddenError'
    }
}
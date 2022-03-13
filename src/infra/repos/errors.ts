class ConnectionNotFoundError extends Error {
  constructor() {
    super("Database connection not found");
    this.name = "ConnectionNotFoundError";
  }
}

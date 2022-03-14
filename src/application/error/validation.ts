class RequireFieldError extends Error {
  constructor(fieldName?: string) {
    const message =
      fieldName === undefined
        ? "Field required"
        : `Field ${fieldName} is required`;
    super(message);
    this.name = "RequiredFieldError";
  }
}


type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

const ok = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data,
});

const badRequest = (error: Error): HttpResponse<Error> => ({
    statusCode: 400,
    data: error,
})

const unauthorized = (error: Error): HttpResponse<Error> => ({
    statusCode: 401,
    data: error,
})

const forbidden = (error: Error): HttpResponse<Error> => ({
    statusCode: 401,
    data: error
})

const serverError = (error: Error): HttpResponse<Error> => ({
    statusCode: 500,
    data: error,
})
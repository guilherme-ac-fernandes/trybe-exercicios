import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = ( 
  err: Error | ZodError, 
  _req,
  res,
  _next,
) => {
  // o instanceof verifica se esse é erro é uma instância do ZodError
  if (err instanceof ZodError) { 
    // se for nós sabemos que é um erro de validação e podemos usar o status 400 e a própria mensagem do zod para retornar a response
    return res.status(400).json({ message: err.issues });
  }
  // aqui vamos fazer o cast da mensagem de erro para uma chave do Enum ErrorTypes
  // com o keyof typeof - traduzindo seria algo como 'chaves do tipo de'
  // dizemos que o `err.message` é alguma das chaves do ErrorTypes
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;

  // vamos usar a mensagem para acessar um erro do nosso catálogo
  // se a mensagem não for uma chave do nosso catálogo "mappedError" vai retornar undefined e não entrar no "if"
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    // dado que o erro está mapeado no nosso catálogo
    // "mappedError" tem valores necessário para responder a requisição
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
    // caso seja um erro não mapeado, o mostraremos no log de erros e retornaremos o status 500
  }
  console.error(err);
  return res.status(500).json({ message: 'Internal Error' });
};

export default errorHandler;
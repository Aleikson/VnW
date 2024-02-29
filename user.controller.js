import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

export const test = (request, response) => {
  response.json({ message: 'API is working!' });
};

export const updateUser = async (request, response, next) => {
  if (request.user.id !== request.params.userId) {
    return next(
      errorHandler(403, 'Você não está autorizado a atualizar este usuário.')
    );
  }
  if (request.body.password) {
    if (request.body.password.length < 6) {
      return next(
        errorHandler(400, 'A senha precisa conter no mínimo 6 caracteres.')
      );
    }
    request.body.password = bcryptjs.hashSync(request.body.password, 10);
  }
  if (request.body.username) {
    if (request.body.username.length < 7 || request.body.username.length > 20) {
      return next(errorHandler(400, 'Usuário precisa conter de 7 a 20 letras'));
    }
    if (request.body.username.includes(' ')) {
      return next(errorHandler(400, 'Usuário não pode conter espaços'));
    }
    if (request.body.username !== request.body.username.toLowerCase()) {
      return next(
        errorHandler(400, 'Usuário deve estar em letras minúsculas.')
      );
    }
    if (!request.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, 'Usuário só pode conter números e letras.')
      );
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      request.params.userId,
      {
        $set: {
          username: request.body.username,
          email: request.body.email,
          profilePicture: request.body.profilePicture,
          password: request.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    response.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (request, response, next) => {
  if (!request.user.isAdmin && request.user.id !== request.params.userId) {
    return next(errorHandler(403, 'Você não está autorizado a deletar este usuário.'));
  }
  try {
    await User.findByIdAndDelete(request.params.userId);
    response.status(200).json('Usuário foi deletado');
  } catch (error) {
    next(error);
  }
};

export const signout = (request, response, next) => {
  try {
    response
      .clearCookie('access_token')
      .status(200)
      .json('Usuário foi desconectado');
  } catch (error) {
    next(error);
  }
};

import { Router } from 'express';
import { post } from './post';
import { login } from './login';
import { me } from './me';
import { logout } from './logout';

export const users = Router({ mergeParams: true });

users.post('/', post);
users.post('/login', login);
users.get('/me', me);
users.delete('', logout);

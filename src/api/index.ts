import { Router } from 'express';
import { counts } from './counts';
import { users } from './users';

export const api = Router();

api.use('/counts', counts);
api.use('/users', users);

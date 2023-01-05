import { Router } from 'express';
import { get } from './get';
import { post } from './post';
import { countId } from './[countId]';

export const counts = Router({ mergeParams: true });

counts.use('/:countId', countId);
counts.get('', get);
counts.post('', post);

// src/middlewares/notFoundHandler.js
import { createError } from 'http-errors';

export const notFoundHandler = createError(404, 'Route not found');

import { Schema, Types } from 'mongoose';

import { modelMixIn } from '../utils/mixins';

import { TUser } from '../types/types';

const userSchema = new Schema<TUser>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export class User extends modelMixIn<TUser>('user', userSchema) {}

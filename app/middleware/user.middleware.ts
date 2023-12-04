import type { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const schema = Joi.object().keys({
  username: Joi.string().min(4).max(10).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(20).required(),
});

export const validationRequest = (reqType: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = reqType.validate(req.body);
    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    }
    next();
  };
};

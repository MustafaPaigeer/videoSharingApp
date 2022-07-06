import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id,
        {
          $set: req.body
        },
        {
          new: true
        })
      res.status(200).json(updatedUser)
    } catch (error) {
      next(error)
    }
  } else {
    return next(createError(403, "You can update only your account!"))
  }
}

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'User has been deleted' })
    } catch (error) {
      next(error)
    }
  } else {
    return next(createError(403, "You can update only your account!"))
  }
}

export const getUser = async (req, res, next) => {

}

export const subscribe = async (req, res, next) => {

}
export const unsubscribe = async (req, res, next) => {

}

export const like = async (req, res, next) => {

}

export const dislike = async (req, res, next) => {

}

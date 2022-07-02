import User from "../models/User.js";
import Video from "../models/Video.js";
import { createError } from "../error.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save()
    res.status(200).json({ video: savedVideo })
  } catch (error) {
    next(error)
  }
}

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id)
    if (!video) return next(createError(404, "video not found"))
    if (req.user.id === video.userId) {
      const updatedUser = await Video.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, {
        new: true
      }
      );
      res.status(200).json({ video: updateVideo })
    } else {
      return next(createError(403, "you can only update your video"))
    }
  } catch (error) {
    next(error)
  }
}

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id)
    if (!video) return next(createError(404, "video not found"))
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "The video has been deleted" })
    } else {
      return next(createError(403, "You can only update your video"))
    }
  } catch (error) {
    next(error)
  }
}

export const getVideo = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}

export const addComment = async(req,res,next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id})
  try {
    const savedComment = await Comment.save()
    res.status(200).json({comment: comment})
  }catch (error) {
    next(error)
  }
}

export const deleteComment = async(req,res,next) => {
  try {

  }catch (error) {

  }
}

export const getComment = async(req,res,next) => {
  try {

  }catch (error) {

  }
}

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({userId: req.user.id, ... req.body});
  try {
    const savedVideo = await newVideo.save()
    res.status(200).json({video: savedVideo})
  }catch (error){
    next(error)
  }
}

export const updateVideo = async (req, res, next) => {
  try {

  }catch (error){
    next(error)
  }
}

export const deleteVideo = async (req, res, next) => {
  try {

  }catch (error){
    next(error)
  }
}

export const getVideo = async (req, res, next) => {
  try {

  }catch (error){
    next(error)
  }
}
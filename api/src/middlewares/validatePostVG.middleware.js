module.exports = async (req, res, next) => {
  const { name, description, platforms, rating, released, genres } = req.body;
  const rating_regex = /^([0-5]|[0-4].\d|5.0)$/;
  const date_regex = /(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/;

  if (!name) {
    return res.status(400).json({ error: "Missing name" });
  }
  if (!description) {
    return res.status(400).json({ error: "Missing description" });
  }
  if (!platforms) {
    return res.status(400).json({ error: "Missing platforms" });
  }
  if (!rating_regex.test(rating)) {
    return res.status(400).json({ error: "Invalid rating (0.0 - 5.0)" });
  }
  if (released && !date_regex.test(released)) {
    return res.status(400).json({ error: "Invalid date" });
  }
  if(!Array.isArray(genres)){
    return res.status(400).json({error: "Invalid Genre(s)"});
  }else if(!genres.length){
    return res.status(400).json({error: "Missing Genre(s)"});
  }
  next();
};

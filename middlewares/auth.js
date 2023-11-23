const auth = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new Error("Authorization header missing");
    }
    const token = authorizationHeader.split(" ")[1];
    let decodeData = jwt.verify(token, "test");
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorized" });
  }
};
export default auth;

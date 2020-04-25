exports.isLoggedIn = (req, res, next) => {
  console.log(req);
  if (true)return next();
  console.log("middleware",req.isAuthenticated())
  res.json({
    message:"No estas autenticado"
  })
};

exports.isLoggedOut = (req, res, next) => {
  if (!req.isAuthenticated()) return next();
  res.json({
    message:"No estas autenticado"
  })
};

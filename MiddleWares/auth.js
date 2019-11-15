module.exports=(req,res,next)=>{
  if(req.session.isLogin)
  {
  	req.session.redirectUrl = req.headers.referer || req.originalUrl || req.url;
    next();
  }
  else {
    res.redirect('/');
  }
}
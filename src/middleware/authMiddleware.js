
const checkTokenMiddleware = (to, from, next) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // next({ name: "LoginPage" });
    return;
  }

  next();
};

export default checkTokenMiddleware;

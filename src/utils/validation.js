export const validateData = (email, pass) => {
  //eslint-disable-next-line
  const emailVal = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  //eslint-disable-next-line
  const passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    pass
  );

  if (!emailVal) return "Email is not Valid";
  if (!passVal) return "Password is not Valid";
  return null;
};

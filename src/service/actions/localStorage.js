export const getAuthorizationToken = () => localStorage.getItem("authorization") || "";

export const getUserRole = () => {
  const role = localStorage.getItem("user-role");
  return role;
};

export const userLogout = () => localStorage.clear();

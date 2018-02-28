export const loginUser = (state = false, status) => {
  switch (status.type) {
  case 'LOGIN_USER':
    return true;
  default: 
    return state;
  }
}
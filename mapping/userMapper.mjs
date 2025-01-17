export const mapUser = (user) => {
    return { email: user.email };
};

export const mapUserList = (users) => {
    return users.map(mapUser);
};
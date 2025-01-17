/**
 * Maps a user profile object to a response object.
 * @param {Object} user - The user object from the database.
 * @returns {Object} - The mapped user profile object.
 */
export const mapUser = (user) => {
    return {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        state: user.state,
        country: user.country,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
};

/**
 * Maps an array of user objects to an array of response objects.
 * @param {Array} users - The array of user objects from the database.
 * @returns {Array} - The array of mapped user objects.
 */
export const mapUserList = (users) => {
    return users.map(mapUser);
};
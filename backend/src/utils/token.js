export const generateToken = (params = {}) => {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 86400,
        });
    }
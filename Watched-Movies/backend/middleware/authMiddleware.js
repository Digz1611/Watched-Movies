// // File: middleware/authMiddleware.js 
// import jwt from 'jsonwebtoken';

// export const verifyToken = (req, res, next) => {
//     const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
//     if (!token) {
//         return res.status(401).json({ status: false, message: 'No token provided' });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.TOKEN_KEY);
//         req.userId = decoded.id;
//         next();
//     } catch (error) {
//         return res.status(401).json({ status: false, message: 'Invalid token' });
//     }
// }; 


import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ status: false, message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ status: false, message: 'Invalid token' });
    }
};
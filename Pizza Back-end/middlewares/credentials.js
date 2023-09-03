const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/getData',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/getData/',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/getData/items',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/getData/items/',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/createProduct',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/createProduct/',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/getData/:id',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/getData/:id/',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/getData/items/:id',
    'https://pizza-ecommerce-app-using-mern-stack.vercel.app/getData/items/:id/'
    ];

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)|| !origin) {
        res.header('Access-Control-Allow-Origin', origin);
    }

    next();
}
module.exports = credentials;
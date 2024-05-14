const Router = {
    "home": "/",
    "login": "/login",
    "register": "/register",
    "catalog": "/catalog",
    "detail-product": "/detail-product/:id",
    "cart": "/cart",
    "wistlist": "/wistlist",
    "success-checkout": "/success-checkout",
    "admin": {
        "home": "/admin",
        "category": {
            "home": "/admin/category",
            "add": "/admin/category/add",
            "edit": "/admin/category/edit/:id",
        },
        "product": {
            "home": "/admin/product",
            "add": "/admin/product/add",
            "edit": "/admin/product/edit/:id",
            "gallery": "/admin/product/:id/gallery",
        },
    }
};

export default Router;
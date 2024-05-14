import Router from "./route/router";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {
  AddCategory,
  AddProduct,
  AdminLayout,
  Cart,
  Catalog,
  CategoryManagement,
  Dashboard,
  DetailProduct,
  EditCategory,
  EditProduct,
  GalleryProduct,
  HomeLayout,
  Homepage,
  Login,
  NotFound,
  ProductManagement,
  Register,
  SuccessCheckout,
  WistList
} from "./pages";
import { ToastContainer } from "react-toastify";
import {
  adminCategoryDropdownLoader,
  adminProductDetailLoader,
  adminProductGalleryLoader,
  adminProductLoader,
  adminCategoryLoader,
  homepageLoader,
  catalogLoader,
  detailProductLoader,
  cartLoader
} from "./loader";

const router = createBrowserRouter([
  {
    path: Router.home,
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: homepageLoader
      },
      {
        path: Router.catalog,
        element: <Catalog />,
        loader: async ({ request }) => {
          const url = new URL(request.url);

          const params = {
            productName: url.searchParams.get("productName") || null,
            type: url.searchParams.get("type") || null,
            category: url.searchParams.get("category") || null
          };

          return catalogLoader(params);
        }
      },
      {
        path: Router["detail-product"],
        element: <DetailProduct />,
        loader: ({ params }) => detailProductLoader(params.id)
      },
      {
        path: Router.cart,
        element: <Cart />,
        loader: cartLoader
      },
      {
        path: Router.wistlist,
        element: <WistList />
      }
    ],
  },
  {
    path: Router.admin.home,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: Router.admin.category.home,
        element: <CategoryManagement />,
        loader: adminCategoryLoader
      },
      {
        path: Router.admin.category.add,
        element: <AddCategory />
      },
      {
        path: Router.admin.category.edit,
        element: <EditCategory />,
      },
      {
        path: Router.admin.product.home,
        element: <ProductManagement />,
        loader: adminProductLoader
      },
      {
        path: Router.admin.product.add,
        element: <AddProduct />,
        loader: adminCategoryDropdownLoader
      },
      {
        path: Router.admin.product.edit,
        element: <EditProduct />,
        loader: ({ params }) => adminProductDetailLoader(params.id)
      },
      {
        path: Router.admin.product.gallery,
        element: <GalleryProduct />,
        loader: ({ params }) => adminProductGalleryLoader(params.id)
      },
    ]
  },
  {
    path: Router.login,
    element: <Login />
  },
  {
    path: Router.register,
    element: <Register />
  },
  {
    path: Router["success-checkout"],
    element: <SuccessCheckout />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
};

export default App;
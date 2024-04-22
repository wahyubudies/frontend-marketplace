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
  WistList
} from "./pages";
import { ToastContainer } from "react-toastify";
import { adminCategoryDropdownLoader, adminProductDetailLoader, adminProductGalleryLoader, adminProductLoader } from "./loader";

const router = createBrowserRouter([
  {
    path: Router.home,
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: Router.catalog,
        element: <Catalog />
      },
      {
        path: Router["detail-product"],
        element: <DetailProduct />
      },
      {
        path: Router.cart,
        element: <Cart />
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
        element: <CategoryManagement />
      },
      {
        path: Router.admin.category.add,
        element: <AddCategory />
      },
      {
        path: Router.admin.category.edit,
        element: <EditCategory />
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
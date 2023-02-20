import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Books from "../components/Books";
import Root from "./root/Root";
import BookDetails from '../components/BookDetails'

export const router = createBrowserRouter([
    {
      path:'/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          index: true,
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
            path: 'books',
            loader: ()=> fetch("https://api.itbook.store/1.0/new"),
            element: <Books></Books>
          },
          {
            path: 'book/:bookDetails',
            loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.bookDetails}`),
            element: <BookDetails></BookDetails>
          },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
  
  ])
import { LuPencilLine } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";

import { Link } from "react-router-dom";
function BooksTable({ books }) {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 roundedf-md">No</th>
          <th className="border border-slate-600 roundedf-md">Title</th>
          <th className="border border-slate-600 roundedf-md max-md:hidden">
            Author
          </th>
          <th className="border border-slate-600 roundedf-md max-md:hidden">
            Publish Year
          </th>
          <th className="border border-slate-600 roundedf-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-6">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md-hidden">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md-hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <LuPencilLine className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDeleteOutline className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksTable;

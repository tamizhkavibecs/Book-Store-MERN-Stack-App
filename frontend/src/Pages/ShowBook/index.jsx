import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../../Component/BackButton";
import Spinner from "../../Component/Spinner";

function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h2 className="text-3xl my-4">Book Details</h2>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-800 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-400">Id :</span>
            <span className="">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-400">Title :</span>
            <span className="">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-400">Author :</span>
            <span className="">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-400">Publish Year :</span>
            <span className="">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-400">Create Time :</span>
            <span className="">{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-400">
              Last Updated Time :
            </span>
            <span className="">{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;

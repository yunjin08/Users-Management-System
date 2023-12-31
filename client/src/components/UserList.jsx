import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserList({ filterUsers }) {
  const navigate = useNavigate();

  const Delete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        alert("Success, User Deleted");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {filterUsers.map((user, index) => {
        return (
          <div
            key={index}
            className="text-xl m-5 text-white text-center font-mono border-2 rounded-2xl py-4"
          >
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Username: {user.email}</h1>
            <h1>Classlevel: {user.classlevel}</h1>
            <div
              className="flex items-center justify-center space-x-3 text-base mt-4
          "
            >
              <Link
                to={`/updateUser/${user._id}`}
                className="px-2 border-[1px] hover:bg-green-900"
              >
                {" "}
                Edit{" "}
              </Link>
              <button
                onClick={() => Delete(user._id)}
                className=" px-2 border-[1px] hover:bg-red-900"
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

UserList.propTypes = {
  filterUsers: PropTypes.array.isRequired, // Define PropTypes for filterUsers
};

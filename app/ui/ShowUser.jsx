import { deleteUser } from "@/app/lib/actions";
import { MdDelete } from "react-icons/md";

const ShowUser = ({ data }) => {
  return (
    <>
      {data.map((val) => (
        <>
          <div key={val.id}>
            <form action={deleteUser} className="flex py-2 ">
              <input type="hidden" name="id" value={val.id} />
              <p className="text-green-400">{val.name}</p>
              <div className="px-2"></div>
              <button>
                <MdDelete size={15} color="blue" />
              </button>
            </form>
          </div>
        </>
      ))}
    </>
  );
};

export default ShowUser;

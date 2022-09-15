export const Header = () => {
  const check = JSON.parse(localStorage.getItem("salaryTotal"));
  return (
    <div className="flex text-center justify-between p-5 bg-emerald-200 rounded-xl">
      <div className=" flex text-center justify-end">
        <h3 className="mr-3 text-orange-900">Income tax calculator</h3>
        <img
          alt="img"
          className="w-8 h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCw29KqZShHyfOtIW0VI-G9CC97LOKVzrfKQ&usqp=CAU"
        />
      </div>
      {check ? (
        <button className="hover:bg-green-600 bg-green-500 text-primary px-5 text-sm md:text-md rounded-md transition delay-50 shadow-xl">
          Download
        </button>
      ) : null}
    </div>
  );
};

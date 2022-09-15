export const Navbar = () => {
  let active = 1;

  const activePage = window.location.pathname;

  if (activePage === "/") {
    active = 1;
  } else {
    active = 0;
  }

  return (
    <div className="ml-3">
      <ul className="flex">
        <li
          className={`${
            active === 1 ? "active" : "inactive"
          } mr-5 cursor-pointer rounded-t-lg px-5 text-xl  transition delay-50 shadow-xl`}
        >
          <a href="/" className="">
            Income
          </a>
        </li>
        <li
          className={`${
            active === 0 ? "active" : "inactive"
          } rounded-t-lg cursor-pointer px-5 text-xl  transition delay-50 shadow-xl`}
        >
          <a href="/income-details" className="">
            Income details
          </a>
        </li>
      </ul>
    </div>
  );
};

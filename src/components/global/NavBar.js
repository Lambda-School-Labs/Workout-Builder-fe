import React, { useState, useRef } from "react";
import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    onClick={props.onClick}
    getProps={({ isCurrent }) => {
      return {
        className: "bg-cornflower-blue hover:bg-white lg:rounded-nav",
        style: {
          backgroundColor: isCurrent && "white"
        }
      };
    }}
  />
);

const NavBar = ({ children, location, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  const menuEvent = event => {
    if (event.target === menuRef.current) {
      closeMenu();
    }
  };

  const openMenu = () => {
    setMenuOpen(true);
    window.addEventListener("click", menuEvent);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.removeEventListener("click", menuEvent);
  };

  const logout = () => {
    localStorage.clear();
    closeMenu();
    navigate("/");
  };

  const name = localStorage.getItem("first_name");

  let title = location?.pathname?.match("^/([^/]+)")[1] ?? '?';
  if (title) title = title[0].toUpperCase() + title.slice(1);

  return (
    <div className="font-body">
      <nav>
        <div className="lg:hidden">
          <div
            className={`${
              menuOpen ? "invisible" : "visible"
            } flex items-center justify-center p-5 bg-cornflower-blue border-b`}
          >
            <span className="font-semibold text-dove-grey">{title}</span>
            <div className="block absolute left-0 ml-4">
              <button onClick={openMenu}>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path
                    d="M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z"
                    fill="#FD6A02"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            ref={menuRef}
            className={`${
              !menuOpen ? "hidden" : ""
            } w-full h-screen absolute top-0 left-0 overflow-hidden absolute z-10`}
            style={{
              backgroundColor: "rgba(0,0,0,0.4)"
            }}
          >
            <div className="flex flex-col h-full w-5/6 bg-cornflower-blue text-dove-grey rounded-tr-lg rounded-br-lg py-4">
              <div className="flex items-center mb-8 mt-4 ml-8">
                <img
                  src="https://picsum.photos/65"
                  alt=""
                  className="rounded-full"
                />
                <span className="font-medium text-lg ml-2">{name || "?"}</span>
              </div>
              <NavLink to="/dashboard" onClick={closeMenu}>
                <div
                  className="grid items-center py-4 px-8"
                  style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                      fill="#666666"
                    />
                  </svg>
                  <span className="ml-5">Home</span>
                </div>
              </NavLink>
              <NavLink to="/program" onClick={closeMenu}>
                <div
                  className="grid items-center py-4 px-8"
                  style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5C10.89 5 10 5.89 10 7C10 8.11 10.89 9 12 9C13.11 9 14 8.11 14 7C14 5.89 13.11 5 12 5ZM22 1V6H20V4H4V6H2V1H4V3H20V1H22ZM15 11.26V23H13V18H11V23H9V11.26C6.93 10.17 5.5 8 5.5 5.5V5H7.5V5.5C7.5 8 9.5 10 12 10C14.5 10 16.5 8 16.5 5.5V5H18.5V5.5C18.5 8 17.07 10.17 15 11.26Z"
                      fill="#666666"
                    />
                  </svg>
                  <span className="ml-5">Programs</span>
                </div>
              </NavLink>
              <NavLink to="/clients" onClick={closeMenu}>
                <div
                  className="grid items-center py-4 px-8"
                  style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V20H20V17.5C20 14.175 13.3375 12.5 10 12.5Z"
                      fill="#666666"
                    />
                  </svg>
                  <span className="ml-5">Clients</span>
                </div>
              </NavLink>
              <NavLink to="/teams" onClick={closeMenu}>
                <div
                  className="grid items-center py-4 px-8"
                  style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.6699 13.1299C18.0399 14.0599 18.9999 15.3199 18.9999 16.9999V19.9999H21.9999C22.5499 19.9999 22.9999 19.5499 22.9999 18.9999V16.9999C22.9999 14.8199 19.4299 13.5299 16.6699 13.1299Z"
                      fill="#666666"
                    />
                    <path
                      d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"
                      fill="#666666"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5305 5.30422 15 6.6314 15 8C15 9.3686 14.5305 10.6958 13.67 11.76C14.09 11.9 14.53 12 15 12ZM9 13C6.33 13 1 14.34 1 17V19C1 19.55 1.45 20 2 20H16C16.55 20 17 19.55 17 19V17C17 14.34 11.67 13 9 13Z"
                      fill="#666666"
                    />
                  </svg>
                  <span className="ml-5">Teams</span>
                </div>
              </NavLink>
              <NavLink to="/library" onClick={closeMenu}>
                <div
                  className="grid items-center py-4 px-8"
                  style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.05714 24H1.37143C1.0077 24 0.658875 23.823 0.401682 23.5079C0.144489 23.1929 0 22.7656 0 22.32V4.68C0 4.23444 0.144489 3.80712 0.401682 3.49206C0.658875 3.177 1.0077 3 1.37143 3H2.05714C2.42087 3 2.7697 3.177 3.02689 3.49206C3.28408 3.80712 3.42857 4.23444 3.42857 4.68V22.32C3.42857 22.7656 3.28408 23.1929 3.02689 23.5079C2.7697 23.823 2.42087 24 2.05714 24Z"
                      fill="#666666"
                    />
                    <path
                      d="M11.4286 4.5C11.4286 4.10218 11.2781 3.72064 11.0102 3.43934C10.7423 3.15804 10.379 3 10.0001 3H7.14293C6.76405 3 6.40068 3.15804 6.13277 3.43934C5.86487 3.72064 5.71436 4.10218 5.71436 4.5V5.8125C5.71436 5.86223 5.73317 5.90992 5.76666 5.94508C5.80015 5.98025 5.84557 6 5.89293 6H11.2501C11.2974 6 11.3429 5.98025 11.3763 5.94508C11.4098 5.90992 11.4286 5.86223 11.4286 5.8125V4.5Z"
                      fill="#666666"
                    />
                    <path
                      d="M5.71436 22.5C5.71436 22.8978 5.86487 23.2794 6.13277 23.5607C6.40068 23.842 6.76405 24 7.14293 24H10.0001C10.379 24 10.7423 23.842 11.0102 23.5607C11.2781 23.2794 11.4286 22.8978 11.4286 22.5V21.0938C11.4286 21.0689 11.4192 21.045 11.4025 21.0275C11.3857 21.0099 11.363 21 11.3394 21H5.80364C5.77996 21 5.75725 21.0099 5.74051 21.0275C5.72376 21.045 5.71436 21.0689 5.71436 21.0938V22.5Z"
                      fill="#666666"
                    />
                    <path
                      d="M11.3394 8H5.80364C5.75433 8 5.71436 8.0684 5.71436 8.15278V18.8472C5.71436 18.9316 5.75433 19 5.80364 19H11.3394C11.3887 19 11.4286 18.9316 11.4286 18.8472V8.15278C11.4286 8.0684 11.3887 8 11.3394 8Z"
                      fill="#666666"
                    />
                    <path
                      d="M16.0001 24H14.8572C14.5541 24 14.2634 23.8194 14.0491 23.4979C13.8348 23.1764 13.7144 22.7404 13.7144 22.2857V1.71429C13.7144 1.25963 13.8348 0.823593 14.0491 0.502103C14.2634 0.180612 14.5541 0 14.8572 0H16.0001C16.3032 0 16.5939 0.180612 16.8082 0.502103C17.0225 0.823593 17.1429 1.25963 17.1429 1.71429V22.2857C17.1429 22.7404 17.0225 23.1764 16.8082 23.4979C16.5939 23.8194 16.3032 24 16.0001 24Z"
                      fill="#666666"
                    />
                    <path
                      d="M23.9948 22.1874L22.5561 4.33752C22.49 3.5159 21.7999 2.92003 21.0147 3.00875L19.5929 3.16625C18.8077 3.25393 18.2247 3.99102 18.2907 4.81264L19.7295 22.6625C19.7956 23.4841 20.4857 24.08 21.2709 23.9912L22.6927 23.8337C23.4779 23.7461 24.0609 23.009 23.9948 22.1874Z"
                      fill="#666666"
                    />
                  </svg>
                  <span className="ml-5">Library</span>
                </div>
              </NavLink>
              <NavLink to="/analytics" onClick={closeMenu}>
                <div
                  className="grid items-center py-4 px-8"
                  style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12C4.73478 12 4.48043 12.1054 4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22C5.26522 22 5.51957 21.8946 5.70711 21.7071C5.89464 21.5196 6 21.2652 6 21V13C6 12.7348 5.89464 12.4804 5.70711 12.2929C5.51957 12.1054 5.26522 12 5 12ZM10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2ZM20 16C19.7348 16 19.4804 16.1054 19.2929 16.2929C19.1054 16.4804 19 16.7348 19 17V21C19 21.2652 19.1054 21.5196 19.2929 21.7071C19.4804 21.8946 19.7348 22 20 22C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V17C21 16.7348 20.8946 16.4804 20.7071 16.2929C20.5196 16.1054 20.2652 16 20 16ZM15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V21C14 21.2652 14.1054 21.5196 14.2929 21.7071C14.4804 21.8946 14.7348 22 15 22C15.2652 22 15.5196 21.8946 15.7071 21.7071C15.8946 21.5196 16 21.2652 16 21V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8Z"
                      fill="#666666"
                    />
                  </svg>
                  <span className="ml-5">Analytics</span>
                </div>
              </NavLink>
              <div className="flex-grow"></div>
              <NavLink to="/settings" onClick={closeMenu}>
                <div
                  className="grid items-center py-4 px-8"
                  style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.72933 6C10.7902 6 11.8076 6.42143 12.5578 7.17157C13.3079 7.92172 13.7293 8.93913 13.7293 10C13.7293 11.0609 13.3079 12.0783 12.5578 12.8284C11.8076 13.5786 10.7902 14 9.72933 14C8.66847 14 7.65105 13.5786 6.9009 12.8284C6.15076 12.0783 5.72933 11.0609 5.72933 10C5.72933 8.93913 6.15076 7.92172 6.9009 7.17157C7.65105 6.42143 8.66847 6 9.72933 6ZM9.72933 8C9.1989 8 8.69019 8.21071 8.31512 8.58579C7.94005 8.96086 7.72933 9.46957 7.72933 10C7.72933 10.5304 7.94005 11.0391 8.31512 11.4142C8.69019 11.7893 9.1989 12 9.72933 12C10.2598 12 10.7685 11.7893 11.1435 11.4142C11.5186 11.0391 11.7293 10.5304 11.7293 10C11.7293 9.46957 11.5186 8.96086 11.1435 8.58579C10.7685 8.21071 10.2598 8 9.72933 8ZM7.72933 20C7.47933 20 7.26933 19.82 7.22933 19.58L6.85933 16.93C6.22933 16.68 5.68933 16.34 5.16933 15.94L2.67933 16.95C2.45933 17.03 2.18933 16.95 2.06933 16.73L0.0693316 13.27C-0.0606684 13.05 -0.000668302 12.78 0.189332 12.63L2.29933 10.97L2.22933 10L2.29933 9L0.189332 7.37C-0.000668302 7.22 -0.0606684 6.95 0.0693316 6.73L2.06933 3.27C2.18933 3.05 2.45933 2.96 2.67933 3.05L5.16933 4.05C5.68933 3.66 6.22933 3.32 6.85933 3.07L7.22933 0.42C7.26933 0.18 7.47933 0 7.72933 0H11.7293C11.9793 0 12.1893 0.18 12.2293 0.42L12.5993 3.07C13.2293 3.32 13.7693 3.66 14.2893 4.05L16.7793 3.05C16.9993 2.96 17.2693 3.05 17.3893 3.27L19.3893 6.73C19.5193 6.95 19.4593 7.22 19.2693 7.37L17.1593 9L17.2293 10L17.1593 11L19.2693 12.63C19.4593 12.78 19.5193 13.05 19.3893 13.27L17.3893 16.73C17.2693 16.95 16.9993 17.04 16.7793 16.95L14.2893 15.95C13.7693 16.34 13.2293 16.68 12.5993 16.93L12.2293 19.58C12.1893 19.82 11.9793 20 11.7293 20H7.72933ZM8.97933 2L8.60933 4.61C7.40933 4.86 6.34933 5.5 5.57933 6.39L3.16933 5.35L2.41933 6.65L4.52933 8.2C4.12933 9.37 4.12933 10.64 4.52933 11.8L2.40933 13.36L3.15933 14.66L5.58933 13.62C6.35933 14.5 7.40933 15.14 8.59933 15.38L8.96933 18H10.4893L10.8593 15.39C12.0493 15.14 13.0993 14.5 13.8693 13.62L16.2993 14.66L17.0493 13.36L14.9293 11.81C15.3293 10.64 15.3293 9.37 14.9293 8.2L17.0393 6.65L16.2893 5.35L13.8793 6.39C13.1093 5.5 12.0493 4.86 10.8493 4.62L10.4793 2H8.97933Z"
                      fill="#666666"
                    />
                  </svg>
                  <span className="ml-5">Settings</span>
                </div>
              </NavLink>
              <div
                className="grid items-center py-4 px-8"
                style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
                onClick={logout}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1"
                >
                  <path d="M16 13V11H7V8L2 12L7 16V13H16Z" fill="#666666" />
                  <path
                    d="M20 3H11C9.897 3 9 3.897 9 5V9H11V5H20V19H11V15H9V19C9 20.103 9.897 21 11 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3Z"
                    fill="#666666"
                  />
                </svg>
                <span className="ml-6">Logout</span>
              </div>
            </div>
          </div>
          {children}
        </div>
        <div className="hidden lg:flex justify-center h-screen bg-cornflower-blue pt-14 pr-12 pl-4">
          <div className="flex flex-col h-full w-84 bg-cornflower-blue text-dove-grey rounded-tr-lg rounded-br-lg py-4">
            <h1 className="text-blaze-orange text-4xl font-display ml-8 mb-8">
              Stronger Faster
            </h1>
            <NavLink to="/dashboard">
              <div
                className="grid items-center py-4 px-8"
                style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-current ${location?.pathname.startsWith('/dashboard') ? 'text-blaze-orange' : 'text-dove-grey'}`}
                >
                  <path
                    d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                  />
                </svg>
                <span className="ml-5">Home</span>
              </div>
            </NavLink>
            <NavLink to="/program">
              <div
                className="grid items-center py-4 px-8"
                style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-current ${location?.pathname.startsWith('/program') ? 'text-blaze-orange' : 'text-dove-grey'}`}
                >
                  <path
                    d="M12 5C10.89 5 10 5.89 10 7C10 8.11 10.89 9 12 9C13.11 9 14 8.11 14 7C14 5.89 13.11 5 12 5ZM22 1V6H20V4H4V6H2V1H4V3H20V1H22ZM15 11.26V23H13V18H11V23H9V11.26C6.93 10.17 5.5 8 5.5 5.5V5H7.5V5.5C7.5 8 9.5 10 12 10C14.5 10 16.5 8 16.5 5.5V5H18.5V5.5C18.5 8 17.07 10.17 15 11.26Z"
                  />
                </svg>
                <span className="ml-5">Programs</span>
              </div>
            </NavLink>
            <NavLink to="/clients">
              <div
                className="grid items-center py-4 px-8"
                style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-current ${location?.pathname.startsWith('/clients') ? 'text-blaze-orange' : 'text-dove-grey'}`}
                >
                  <path
                    d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V20H20V17.5C20 14.175 13.3375 12.5 10 12.5Z"
                  />
                </svg>
                <span className="ml-5">Clients</span>
              </div>
            </NavLink>
            <NavLink to="/teams">
              <div
                className="grid items-center py-4 px-8"
                style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-current ${location?.pathname.startsWith('/teams') ? 'text-blaze-orange' : 'text-dove-grey'}`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.6699 13.1299C18.0399 14.0599 18.9999 15.3199 18.9999 16.9999V19.9999H21.9999C22.5499 19.9999 22.9999 19.5499 22.9999 18.9999V16.9999C22.9999 14.8199 19.4299 13.5299 16.6699 13.1299Z"
                  />
                  <path
                    d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5305 5.30422 15 6.6314 15 8C15 9.3686 14.5305 10.6958 13.67 11.76C14.09 11.9 14.53 12 15 12ZM9 13C6.33 13 1 14.34 1 17V19C1 19.55 1.45 20 2 20H16C16.55 20 17 19.55 17 19V17C17 14.34 11.67 13 9 13Z"
                  />
                </svg>
                <span className="ml-5">Teams</span>
              </div>
            </NavLink>
            <NavLink to="/library">
              <div
                className="grid items-center py-4 px-8"
                style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-current ${location?.pathname.startsWith('/library') ? 'text-blaze-orange' : 'text-dove-grey'}`}
                >
                  <path
                    d="M2.05714 24H1.37143C1.0077 24 0.658875 23.823 0.401682 23.5079C0.144489 23.1929 0 22.7656 0 22.32V4.68C0 4.23444 0.144489 3.80712 0.401682 3.49206C0.658875 3.177 1.0077 3 1.37143 3H2.05714C2.42087 3 2.7697 3.177 3.02689 3.49206C3.28408 3.80712 3.42857 4.23444 3.42857 4.68V22.32C3.42857 22.7656 3.28408 23.1929 3.02689 23.5079C2.7697 23.823 2.42087 24 2.05714 24Z"
                  />
                  <path
                    d="M11.4286 4.5C11.4286 4.10218 11.2781 3.72064 11.0102 3.43934C10.7423 3.15804 10.379 3 10.0001 3H7.14293C6.76405 3 6.40068 3.15804 6.13277 3.43934C5.86487 3.72064 5.71436 4.10218 5.71436 4.5V5.8125C5.71436 5.86223 5.73317 5.90992 5.76666 5.94508C5.80015 5.98025 5.84557 6 5.89293 6H11.2501C11.2974 6 11.3429 5.98025 11.3763 5.94508C11.4098 5.90992 11.4286 5.86223 11.4286 5.8125V4.5Z"
                  />
                  <path
                    d="M5.71436 22.5C5.71436 22.8978 5.86487 23.2794 6.13277 23.5607C6.40068 23.842 6.76405 24 7.14293 24H10.0001C10.379 24 10.7423 23.842 11.0102 23.5607C11.2781 23.2794 11.4286 22.8978 11.4286 22.5V21.0938C11.4286 21.0689 11.4192 21.045 11.4025 21.0275C11.3857 21.0099 11.363 21 11.3394 21H5.80364C5.77996 21 5.75725 21.0099 5.74051 21.0275C5.72376 21.045 5.71436 21.0689 5.71436 21.0938V22.5Z"
                  />
                  <path
                    d="M11.3394 8H5.80364C5.75433 8 5.71436 8.0684 5.71436 8.15278V18.8472C5.71436 18.9316 5.75433 19 5.80364 19H11.3394C11.3887 19 11.4286 18.9316 11.4286 18.8472V8.15278C11.4286 8.0684 11.3887 8 11.3394 8Z"
                  />
                  <path
                    d="M16.0001 24H14.8572C14.5541 24 14.2634 23.8194 14.0491 23.4979C13.8348 23.1764 13.7144 22.7404 13.7144 22.2857V1.71429C13.7144 1.25963 13.8348 0.823593 14.0491 0.502103C14.2634 0.180612 14.5541 0 14.8572 0H16.0001C16.3032 0 16.5939 0.180612 16.8082 0.502103C17.0225 0.823593 17.1429 1.25963 17.1429 1.71429V22.2857C17.1429 22.7404 17.0225 23.1764 16.8082 23.4979C16.5939 23.8194 16.3032 24 16.0001 24Z"
                  />
                  <path
                    d="M23.9948 22.1874L22.5561 4.33752C22.49 3.5159 21.7999 2.92003 21.0147 3.00875L19.5929 3.16625C18.8077 3.25393 18.2247 3.99102 18.2907 4.81264L19.7295 22.6625C19.7956 23.4841 20.4857 24.08 21.2709 23.9912L22.6927 23.8337C23.4779 23.7461 24.0609 23.009 23.9948 22.1874Z"
                  />
                </svg>
                <span className="ml-5">Library</span>
              </div>
            </NavLink>
            <NavLink to="/analytics">
              <div
                className="grid items-center py-4 px-8"
                style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-current ${location?.pathname.startsWith('/analytics') ? 'text-blaze-orange' : 'text-dove-grey'}`}
                >
                  <path
                    d="M5 12C4.73478 12 4.48043 12.1054 4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22C5.26522 22 5.51957 21.8946 5.70711 21.7071C5.89464 21.5196 6 21.2652 6 21V13C6 12.7348 5.89464 12.4804 5.70711 12.2929C5.51957 12.1054 5.26522 12 5 12ZM10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2ZM20 16C19.7348 16 19.4804 16.1054 19.2929 16.2929C19.1054 16.4804 19 16.7348 19 17V21C19 21.2652 19.1054 21.5196 19.2929 21.7071C19.4804 21.8946 19.7348 22 20 22C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V17C21 16.7348 20.8946 16.4804 20.7071 16.2929C20.5196 16.1054 20.2652 16 20 16ZM15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V21C14 21.2652 14.1054 21.5196 14.2929 21.7071C14.4804 21.8946 14.7348 22 15 22C15.2652 22 15.5196 21.8946 15.7071 21.7071C15.8946 21.5196 16 21.2652 16 21V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8Z"
                  />
                </svg>
                <span className="ml-5">Analytics</span>
              </div>
            </NavLink>
            <div className="flex-grow"></div>
            <NavLink to="/settings">
              <div
                className="grid items-center py-4 px-8"
                style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-current ${location?.pathname.startsWith('/settings') ? 'text-blaze-orange' : 'text-dove-grey'}`}
                >
                  <path
                    d="M9.72933 6C10.7902 6 11.8076 6.42143 12.5578 7.17157C13.3079 7.92172 13.7293 8.93913 13.7293 10C13.7293 11.0609 13.3079 12.0783 12.5578 12.8284C11.8076 13.5786 10.7902 14 9.72933 14C8.66847 14 7.65105 13.5786 6.9009 12.8284C6.15076 12.0783 5.72933 11.0609 5.72933 10C5.72933 8.93913 6.15076 7.92172 6.9009 7.17157C7.65105 6.42143 8.66847 6 9.72933 6ZM9.72933 8C9.1989 8 8.69019 8.21071 8.31512 8.58579C7.94005 8.96086 7.72933 9.46957 7.72933 10C7.72933 10.5304 7.94005 11.0391 8.31512 11.4142C8.69019 11.7893 9.1989 12 9.72933 12C10.2598 12 10.7685 11.7893 11.1435 11.4142C11.5186 11.0391 11.7293 10.5304 11.7293 10C11.7293 9.46957 11.5186 8.96086 11.1435 8.58579C10.7685 8.21071 10.2598 8 9.72933 8ZM7.72933 20C7.47933 20 7.26933 19.82 7.22933 19.58L6.85933 16.93C6.22933 16.68 5.68933 16.34 5.16933 15.94L2.67933 16.95C2.45933 17.03 2.18933 16.95 2.06933 16.73L0.0693316 13.27C-0.0606684 13.05 -0.000668302 12.78 0.189332 12.63L2.29933 10.97L2.22933 10L2.29933 9L0.189332 7.37C-0.000668302 7.22 -0.0606684 6.95 0.0693316 6.73L2.06933 3.27C2.18933 3.05 2.45933 2.96 2.67933 3.05L5.16933 4.05C5.68933 3.66 6.22933 3.32 6.85933 3.07L7.22933 0.42C7.26933 0.18 7.47933 0 7.72933 0H11.7293C11.9793 0 12.1893 0.18 12.2293 0.42L12.5993 3.07C13.2293 3.32 13.7693 3.66 14.2893 4.05L16.7793 3.05C16.9993 2.96 17.2693 3.05 17.3893 3.27L19.3893 6.73C19.5193 6.95 19.4593 7.22 19.2693 7.37L17.1593 9L17.2293 10L17.1593 11L19.2693 12.63C19.4593 12.78 19.5193 13.05 19.3893 13.27L17.3893 16.73C17.2693 16.95 16.9993 17.04 16.7793 16.95L14.2893 15.95C13.7693 16.34 13.2293 16.68 12.5993 16.93L12.2293 19.58C12.1893 19.82 11.9793 20 11.7293 20H7.72933ZM8.97933 2L8.60933 4.61C7.40933 4.86 6.34933 5.5 5.57933 6.39L3.16933 5.35L2.41933 6.65L4.52933 8.2C4.12933 9.37 4.12933 10.64 4.52933 11.8L2.40933 13.36L3.15933 14.66L5.58933 13.62C6.35933 14.5 7.40933 15.14 8.59933 15.38L8.96933 18H10.4893L10.8593 15.39C12.0493 15.14 13.0993 14.5 13.8693 13.62L16.2993 14.66L17.0493 13.36L14.9293 11.81C15.3293 10.64 15.3293 9.37 14.9293 8.2L17.0393 6.65L16.2893 5.35L13.8793 6.39C13.1093 5.5 12.0493 4.86 10.8493 4.62L10.4793 2H8.97933Z"
                  />
                </svg>
                <span className="ml-5">Settings</span>
              </div>
            </NavLink>
            <div
              className="grid items-center py-4 px-8 cursor-pointer hover:bg-white"
              style={{ gridTemplateColumns: "0.1fr 1.9fr" }}
              onClick={logout}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-1"
              >
                <path d="M16 13V11H7V8L2 12L7 16V13H16Z" fill="#666666" />
                <path
                  d="M20 3H11C9.897 3 9 3.897 9 5V9H11V5H20V19H11V15H9V19C9 20.103 9.897 21 11 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3Z"
                  fill="#666666"
                />
              </svg>
              <span className="ml-6">Logout</span>
            </div>
          </div>
          <div
            className="bg-white w-full max-w-screen-xl"
            style={{ borderRadius: "20px 20px 0px 0px" }}
          >
            {children}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

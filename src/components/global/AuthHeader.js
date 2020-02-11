import React, { useRef } from 'react';
import { Link, navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import NavLink from '../../utils/NavLink';

const  AuthHeader= (props) =>{

  const Dispatch = useDispatch();

  const handleLogout = (data) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user-id');
    Dispatch({type: "UPDATE", payload:{userID: data.user_id}});
    navigate("/");
  };

  const months = ['January', 'February', 'March' , 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  const month = months[date.getMonth()];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];
  let suffix;

  if (String(day).endsWith("1")) {
    suffix = 'st';
  } else if (String(day).endsWith("2")) {
    suffix = 'nd';
  } else if (String(day).endsWith("3")) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  const displayDay = `${dayOfWeek}`;
  const displayDate = `${month} ${day}${suffix}`;

  const navEl = useRef(null);
  const toggleNav = () => {
    navEl.current.classList.toggle('hidden');
  };

  return (
    <nav className="pb-24 lg:pb-0">
      <div className="flex items-center flex-wrap bg-uxlightgrey px-6 py-6 absolute w-full z-10 lg:hidden">

        <div className="flex w-full items-center justify-center text-black absolute left-0 text-center px-4 py-2">
          <div className="flex flex-col">
            <div className="font-display text-uxline text-md tracking-tight -mb-1 text-left">{displayDay}</div>
            <div className="font-bold font-display text-2xl tracking-tight">{displayDate}</div>
          </div>
        </div>
        <div className="z-10">
          <button className="flex items-center text-black focus:outline-none" onClick={toggleNav}>
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </div>
      <div ref={navEl} className="hidden lg:block">
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50 lg:hidden"></div>
        <div className="flex flex-col font-medium px-2 py-8 absolute left-0 top-0 bg-white w-56 h-full font-body text-lg pt-24 lg:pt-10 lg:pl-3">
          <div className=" hidden lg:block text-uxorangetext font-medium font-h1 leading-none text-3xl pl-4 pb-10 ">
            <h1>Stronger Faster</h1>
          </div>
          <div className="flex items-center pt-2 pl-4 mb-8 lg:pl-8">
            <svg width="24" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#666666"/>
            </svg>
            <NavLink to="/dashboard" className="ml-4 text-black hover:text-uxorangetext ">Home</NavLink>
          </div>
          <div className="flex items-center pl-4 mb-8 lg:pl-8 color:uxicon">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5.71425C10.89 5.71425 10 6.73139 10 7.99996C10 9.26854 10.89 10.2857 12 10.2857C13.11 10.2857 14 9.26854 14 7.99996C14 6.73139 13.11 5.71425 12 5.71425ZM22 1.14282V6.85711H20V4.57139H4V6.85711H2V1.14282H4V3.42854H20V1.14282H22ZM15 12.8685V26.2857H13V20.5714H11V26.2857H9V12.8685C6.93 11.6228 5.5 9.14282 5.5 6.28568V5.71425H7.5V6.28568C7.5 9.14282 9.5 11.4285 12 11.4285C14.5 11.4285 16.5 9.14282 16.5 6.28568V5.71425H18.5V6.28568C18.5 9.14282 17.07 11.6228 15 12.8685Z" fill="#666666"/>
            </svg>
            <NavLink to="/" className="ml-4 hover:text-uxorangetext">Programs</NavLink>
          </div>
          <div className="flex items-center pl-4 mb-8 lg:pl-8">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14.143C14.21 14.143 16 12.0973 16 9.57155C16 7.04584 14.21 5.00012 12 5.00012C9.79 5.00012 8 7.04584 8 9.57155C8 12.0973 9.79 14.143 12 14.143ZM12 16.4287C9.33 16.4287 4 17.9601 4 21.0001V23.2858H20V21.0001C20 17.9601 14.67 16.4287 12 16.4287Z" fill="#666666"/>
            </svg>
            <NavLink to="/clients" className="ml-4 hover:text-uxorangetext">Clients</NavLink>
          </div>
          <div className="flex items-center pl-4 mb-8 lg:pl-8">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.67 15.0057C18.04 16.0686 19 17.5086 19 19.4286V22.8572H22C22.55 22.8572 23 22.3429 23 21.7143V19.4286C23 16.9372 19.43 15.4629 16.67 15.0057Z" fill="#666666"/>
              <path d="M9 13.7143C11.2091 13.7143 13 11.6676 13 9.14284C13 6.61811 11.2091 4.57141 9 4.57141C6.79086 4.57141 5 6.61811 5 9.14284C5 11.6676 6.79086 13.7143 9 13.7143Z" fill="#666666"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M15 13.7143C17.21 13.7143 19 11.6686 19 9.14284C19 6.61713 17.21 4.57141 15 4.57141C14.53 4.57141 14.09 4.6857 13.67 4.8457C14.5305 6.06194 15 7.57873 15 9.14284C15 10.707 14.5305 12.2237 13.67 13.44C14.09 13.6 14.53 13.7143 15 13.7143ZM9 14.8571C6.33 14.8571 1 16.3886 1 19.4286V21.7143C1 22.3428 1.45 22.8571 2 22.8571H16C16.55 22.8571 17 22.3428 17 21.7143V19.4286C17 16.3886 11.67 14.8571 9 14.8571Z" fill="#666666"/>
            </svg>
            <NavLink to="/teams" className="ml-4 hover:text-uxorangetext active:text-uxorangetext">Teams</NavLink>
          </div>
          <div className="flex items-center pl-4 mb-8 lg:pl-8">
            <svg width="24" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.8 27.7147H1.2C0.88174 27.7147 0.576516 27.5124 0.351472 27.1524C0.126428 26.7923 0 26.3039 0 25.7947V5.63472C0 5.12551 0.126428 4.63715 0.351472 4.27708C0.576516 3.91701 0.88174 3.71472 1.2 3.71472H1.8C2.11826 3.71472 2.42348 3.91701 2.64853 4.27708C2.87357 4.63715 3 5.12551 3 5.63472V25.7947C3 26.3039 2.87357 26.7923 2.64853 27.1524C2.42348 27.5124 2.11826 27.7147 1.8 27.7147Z" fill="#666666"/>
              <path d="M10 5.42901C10 4.97435 9.8683 4.53832 9.63388 4.21682C9.39946 3.89533 9.08152 3.71472 8.75 3.71472H6.25C5.91848 3.71472 5.60054 3.89533 5.36612 4.21682C5.1317 4.53832 5 4.97435 5 5.42901V6.92901C5 6.98584 5.01646 7.04034 5.04576 7.08053C5.07507 7.12072 5.11481 7.14329 5.15625 7.14329H9.84375C9.88519 7.14329 9.92493 7.12072 9.95424 7.08053C9.98354 7.04034 10 6.98584 10 6.92901V5.42901Z" fill="#666666"/>
              <path d="M5 26.0004C5 26.4551 5.1317 26.8911 5.36612 27.2126C5.60054 27.5341 5.91848 27.7147 6.25 27.7147H8.75C9.08152 27.7147 9.39946 27.5341 9.63388 27.2126C9.8683 26.8911 10 26.4551 10 26.0004V24.3933C10 24.3649 9.99177 24.3376 9.97712 24.3175C9.96247 24.2974 9.9426 24.2861 9.92188 24.2861H5.07812C5.0574 24.2861 5.03753 24.2974 5.02288 24.3175C5.00823 24.3376 5 24.3649 5 24.3933V26.0004Z" fill="#666666"/>
              <path d="M9.92188 9.42896H5.07812C5.03498 9.42896 5 9.50713 5 9.60356V21.8258C5 21.9222 5.03498 22.0004 5.07812 22.0004H9.92188C9.96502 22.0004 10 21.9222 10 21.8258V9.60356C10 9.50713 9.96502 9.42896 9.92188 9.42896Z" fill="#666666"/>
              <path d="M13.9999 27.7147H12.9999C12.7347 27.7147 12.4803 27.5083 12.2928 27.1409C12.1052 26.7735 11.9999 26.2751 11.9999 25.7555V2.24532C11.9999 1.72571 12.1052 1.22738 12.2928 0.859964C12.4803 0.492546 12.7347 0.286133 12.9999 0.286133H13.9999C14.2651 0.286133 14.5194 0.492546 14.707 0.859964C14.8945 1.22738 14.9999 1.72571 14.9999 2.24532V25.7555C14.9999 26.2751 14.8945 26.7735 14.707 27.1409C14.5194 27.5083 14.2651 27.7147 13.9999 27.7147Z" fill="#666666"/>
              <path d="M20.9955 25.6431L19.7366 5.24331C19.6788 4.30432 19.075 3.62333 18.3879 3.72473L17.1438 3.90472C16.4568 4.00492 15.9467 4.84732 16.0045 5.78631L17.2634 26.1861C17.3212 27.1251 17.925 27.8061 18.6121 27.7047L19.8562 27.5247C20.5432 27.4245 21.0533 26.5821 20.9955 25.6431Z" fill="#666666"/>
            </svg>
            <NavLink to="/library" className="ml-4 hover:text-uxorangetext">Library</NavLink>
          </div>
          <div className="flex items-center pl-4 mb-auto lg:pl-8">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 14C4.73478 14 4.48043 14.1204 4.29289 14.3347C4.10536 14.549 4 14.8397 4 15.1428V24.2857C4 24.5888 4.10536 24.8795 4.29289 25.0938C4.48043 25.3082 4.73478 25.4286 5 25.4286C5.26522 25.4286 5.51957 25.3082 5.70711 25.0938C5.89464 24.8795 6 24.5888 6 24.2857V15.1428C6 14.8397 5.89464 14.549 5.70711 14.3347C5.51957 14.1204 5.26522 14 5 14ZM10 2.57141C9.73478 2.57141 9.48043 2.69182 9.29289 2.90615C9.10536 3.12047 9 3.41116 9 3.71427V24.2857C9 24.5888 9.10536 24.8795 9.29289 25.0938C9.48043 25.3082 9.73478 25.4286 10 25.4286C10.2652 25.4286 10.5196 25.3082 10.7071 25.0938C10.8946 24.8795 11 24.5888 11 24.2857V3.71427C11 3.41116 10.8946 3.12047 10.7071 2.90615C10.5196 2.69182 10.2652 2.57141 10 2.57141ZM20 18.5714C19.7348 18.5714 19.4804 18.6918 19.2929 18.9061C19.1054 19.1205 19 19.4112 19 19.7143V24.2857C19 24.5888 19.1054 24.8795 19.2929 25.0938C19.4804 25.3082 19.7348 25.4286 20 25.4286C20.2652 25.4286 20.5196 25.3082 20.7071 25.0938C20.8946 24.8795 21 24.5888 21 24.2857V19.7143C21 19.4112 20.8946 19.1205 20.7071 18.9061C20.5196 18.6918 20.2652 18.5714 20 18.5714ZM15 9.42856C14.7348 9.42856 14.4804 9.54896 14.2929 9.76329C14.1054 9.97762 14 10.2683 14 10.5714V24.2857C14 24.5888 14.1054 24.8795 14.2929 25.0938C14.4804 25.3082 14.7348 25.4286 15 25.4286C15.2652 25.4286 15.5196 25.3082 15.7071 25.0938C15.8946 24.8795 16 24.5888 16 24.2857V10.5714C16 10.2683 15.8946 9.97762 15.7071 9.76329C15.5196 9.54896 15.2652 9.42856 15 9.42856Z" fill="#666666"/>
            </svg>
            <NavLink to="/analytics" className="ml-4 hover:text-uxorangetext">Analytics</NavLink>
          </div>
          <div className="flex items-center pl-4 mb-8 lg:pl-8">
            <svg width="24" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.72933 6C10.7902 6 11.8076 6.42143 12.5578 7.17157C13.3079 7.92172 13.7293 8.93913 13.7293 10C13.7293 11.0609 13.3079 12.0783 12.5578 12.8284C11.8076 13.5786 10.7902 14 9.72933 14C8.66847 14 7.65105 13.5786 6.9009 12.8284C6.15076 12.0783 5.72933 11.0609 5.72933 10C5.72933 8.93913 6.15076 7.92172 6.9009 7.17157C7.65105 6.42143 8.66847 6 9.72933 6ZM9.72933 8C9.1989 8 8.69019 8.21071 8.31512 8.58579C7.94005 8.96086 7.72933 9.46957 7.72933 10C7.72933 10.5304 7.94005 11.0391 8.31512 11.4142C8.69019 11.7893 9.1989 12 9.72933 12C10.2598 12 10.7685 11.7893 11.1435 11.4142C11.5186 11.0391 11.7293 10.5304 11.7293 10C11.7293 9.46957 11.5186 8.96086 11.1435 8.58579C10.7685 8.21071 10.2598 8 9.72933 8ZM7.72933 20C7.47933 20 7.26933 19.82 7.22933 19.58L6.85933 16.93C6.22933 16.68 5.68933 16.34 5.16933 15.94L2.67933 16.95C2.45933 17.03 2.18933 16.95 2.06933 16.73L0.0693316 13.27C-0.0606684 13.05 -0.000668302 12.78 0.189332 12.63L2.29933 10.97L2.22933 10L2.29933 9L0.189332 7.37C-0.000668302 7.22 -0.0606684 6.95 0.0693316 6.73L2.06933 3.27C2.18933 3.05 2.45933 2.96 2.67933 3.05L5.16933 4.05C5.68933 3.66 6.22933 3.32 6.85933 3.07L7.22933 0.42C7.26933 0.18 7.47933 0 7.72933 0H11.7293C11.9793 0 12.1893 0.18 12.2293 0.42L12.5993 3.07C13.2293 3.32 13.7693 3.66 14.2893 4.05L16.7793 3.05C16.9993 2.96 17.2693 3.05 17.3893 3.27L19.3893 6.73C19.5193 6.95 19.4593 7.22 19.2693 7.37L17.1593 9L17.2293 10L17.1593 11L19.2693 12.63C19.4593 12.78 19.5193 13.05 19.3893 13.27L17.3893 16.73C17.2693 16.95 16.9993 17.04 16.7793 16.95L14.2893 15.95C13.7693 16.34 13.2293 16.68 12.5993 16.93L12.2293 19.58C12.1893 19.82 11.9793 20 11.7293 20H7.72933ZM8.97933 2L8.60933 4.61C7.40933 4.86 6.34933 5.5 5.57933 6.39L3.16933 5.35L2.41933 6.65L4.52933 8.2C4.12933 9.37 4.12933 10.64 4.52933 11.8L2.40933 13.36L3.15933 14.66L5.58933 13.62C6.35933 14.5 7.40933 15.14 8.59933 15.38L8.96933 18H10.4893L10.8593 15.39C12.0493 15.14 13.0993 14.5 13.8693 13.62L16.2993 14.66L17.0493 13.36L14.9293 11.81C15.3293 10.64 15.3293 9.37 14.9293 8.2L17.0393 6.65L16.2893 5.35L13.8793 6.39C13.1093 5.5 12.0493 4.86 10.8493 4.62L10.4793 2H8.97933Z" fill="#666666"/>
            </svg>
            <NavLink to="/settings" className="ml-4 hover:text-uxorangetext">Settings</NavLink>
          </div>
          <div className="flex items-center pl-4 mb-1 lg:pl-8">
            <svg width="24" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 13V11H7V8L2 12L7 16V13H16Z" fill="#666666"/>
              <path d="M20 3H11C9.897 3 9 3.897 9 5V9H11V5H20V19H11V15H9V19C9 20.103 9.897 21 11 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3Z" fill="#666666"/>
            </svg>
            <button onClick={handleLogout} className="ml-4 hover:text-uxorangetext">Log Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  userID: state.user_id,
  updates: state.updates,
});
export default connect(
  mapStateToProps,
)(AuthHeader);


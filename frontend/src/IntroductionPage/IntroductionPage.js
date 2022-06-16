import React, { useEffect } from "react";
import { useContext } from "../hooks/context/GlobalContext";
import logo from "../resources/images/logo.png";
import ConnectingButtons from "./ConnectingButtons";
// import { connect } from "react-redux";
// import { setIsRoomHost } from "../hooks/reducer/actions";

import "./IntroductionPage.css";

const IntroductionPage = () => {
  const { dispatch } = useContext();

  useEffect(() => {
    //setIsRoomHostAction(false);
    dispatch({ type: "SET_IS_ROOM_HOST", payload: { isRoomHost: false } });
  }, []);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <h1>video chat application</h1>
        <ConnectingButtons />
      </div>
    </div>
  );
};

export default IntroductionPage;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
//   };
// };

// export default connect(null, mapDispatchToProps)(IntroductionPage);
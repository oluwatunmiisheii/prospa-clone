import React from 'react';
import Sidebar from "react-sidebar";
import SideBarContent from "./sidebarContent"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const MobileSidebar = ({isOpen, setIsOpen, children, onClickAway}) => {
  const styles = {
    root: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
    },
    sidebar: {
      zIndex: 2,
      position: "absolute",
      top: 0,
      bottom: 0,
      transition: "transform .3s ease-out",
      WebkitTransition: "-webkit-transform .3s ease-out",
      willChange: "transform",
      overflowY: "auto",
      overflowX: "hidden",
      background: "#fff",
      padding: 0,
      width: 300,
    },
    // content: {
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   overflowY: "auto",
    //   WebkitOverflowScrolling: "touch",
    //   transition: "left .3s ease-out, right .3s ease-out",
    // },
    overlay: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      visibility: "hidden",
      transition: "opacity .3s ease-out, visibility .3s ease-out",
      backgroundColor: "rgba(0,0,0,.3)",
    },
    dragHandle: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      bottom: 0,
    },
  };
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Sidebar
        sidebar={<SideBarContent />}
        open={isOpen}
        onSetOpen={setIsOpen}
        styles={styles}
        pullRight={false}
      >
        {children}
      </Sidebar>
    </ClickAwayListener>
  );
}
 
export default MobileSidebar;
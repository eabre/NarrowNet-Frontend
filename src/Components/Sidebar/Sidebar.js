import { Drawer, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutlineOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const sidebarList = [
  {
    name: "Home",
    icon: <HomeOutlined />,
  },
  { name: "Inbox", icon: <InboxOutlined /> },
  { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
  { name: "Sent mail", icon: <MailOutlineOutlined /> },
  { name: "Draft", icon: <DraftsOutlined /> },
  { name: "Trash", icon: <ReceiptOutlined /> },
];

function Sidebar() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleSidebarClick = () => {
    setOpenSideBar(!openSideBar);
  };

  const getSidebarList = () => (
    <div style={{ width: 250 }} onClick={() => setOpenSideBar(false)}>
      {sidebarList.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <div>
      <Drawer
        open={openSideBar}
        anchor={"left"}
        onClose={() => setOpenSideBar(false)}
      >
        {getSidebarList()}
      </Drawer>
    </div>
  );
}

export default Sidebar;

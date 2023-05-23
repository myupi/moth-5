import { Popover } from "antd";

import { Avatar } from "antd";
import { Link } from "react-router-dom";

export function AvatarUser({ setToken }) {
  const LogOut = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("user");
    setToken(false);
    window.location.href = "/"
  };
  let user = localStorage.getItem("user") || null
  const content = (
    <div>
      <button className="btn btn-primary" onClick={LogOut}>
        Log Out
      </button>
    </div>
  );
  return (
    <div className="d-flex gap-2 align-items-center">
      <Link to={"/profile"} style={{ color: "blue" }}>
        {user}
      </Link>
      <Popover content={content}>
        <Avatar
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {user.slice(0, 1)}
        </Avatar>
      </Popover>
    </div>
  );
}

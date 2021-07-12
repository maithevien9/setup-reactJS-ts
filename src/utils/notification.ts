import { notification } from "antd";

const openNotification = (description: string) => {
  notification["error"]({
    message: "Notification",
    description: description,
  });
};

export default openNotification;

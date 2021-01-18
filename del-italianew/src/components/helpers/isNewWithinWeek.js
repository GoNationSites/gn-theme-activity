import moment from "moment"
export default createdAt =>
  moment(createdAt).isSame(new Date(), "week") ? true : false

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container:{
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  appBar: {
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  heading: {
    color: "rgba(255, 255, 255, 0.9)",
  },
  image: {
    marginLeft: "15px",
    width: "max-content",
  },
}));

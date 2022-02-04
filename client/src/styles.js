import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
    liveFeed:{
      maxWidth: "100%",
    },
    formMobile:{
      maxWidth: "100%",
    }
  },
  
}));

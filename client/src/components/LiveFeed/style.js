import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  centerText:{
    textAlign: "center",
  },

  // MediaQuery
  [theme.breakpoints.down('sm')]:{
    mainContainer:{
      flexDirection: 'column-reverse',
    },
    postWrapper:{
      maxWidth: "100%",
    }
  }
}));

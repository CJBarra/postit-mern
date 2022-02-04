import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: "0",
    paddingTop: "55%",
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundBlendMode: "darken",
  },
  border: { border: "solid" },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "8px",
    height: "100%",
    position: "relative",
  },
  grid: { display: "flex" },
  fullHeightCard: { height: "100%" },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  title: { padding: "0 16px", textTransform: "capitalize" },
  message: { padding: "0"},
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "#fff",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "#fff",
  },
});

import React from "react";
import CardBox from "../../components/LostAndFound/CardBox";
import Typography from "@mui/material/Typography";
import img1 from "../../images/LostAnno.png";
import img2 from "../../images/FoundAnno.png";
import img3 from "../../images/Report.png";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import BackgroundImage from "../../images/lostandfoundbg.jpg";

export default function LostFound() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleAuthentication = () => {
    if (token != null){
      navigate("lostfoundreport");
    }else{
       navigate("/signin");
    }
  }

  const cardBoxStyle = {
    boxShadow: "0px 2px 4px hsla(220, 95.30%, 33.10%, 0.80)",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  };

  return (
    <div 
      style={{
        backgroundColor: "#ADD8E6",
        backgroundImage: `url(${BackgroundImage})`, // Add your background image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000"
      }}
    >
      <div>
        <HeaderBar />

        <Typography variant="h3" align="right" marginTop="60px" color="#071739">
          Get Your Things Back with
        </Typography>

        <Typography
          variant="h2"
          align="right"
          fontWeight="bold"
          fontFamily="calibri"
          marginBottom="30px"
          color="#072D44"
        >
          Lost & Found
        </Typography>

        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <CardBox
            icon={img1}
            typography={"Lost Announcement"}
            onClick={() => navigate("lostitem")}
          />
          <CardBox
            icon={img2}
            typography={"Found Announcement"}
            onClick={() => navigate("founditem")}
          />
          <CardBox
            icon={img3}
            typography={"Report Lost/Found"}
            onClick={() => handleAuthentication()}
          />
        </Grid>
      </div>
    </div>
  );
}

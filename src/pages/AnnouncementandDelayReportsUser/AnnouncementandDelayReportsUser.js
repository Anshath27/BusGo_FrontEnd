import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import DelayInput from "../../components/Delay/DelayInput/DelayInput";
import DelayList from "../../components/Delay/DelayList/DelayList";
import "./AnnouncementDelayUser.css";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import BackgroundImage from "../../images/ann1.jpg";

function AnnouncementandDelayReportsAdmin() {
  const [delayList, setDelayList] = useState([]);

  const addDelayHandler = (newDelay) => {
    console.log("shot");
    setDelayList((prevDelays) => [newDelay, ...prevDelays]);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f4f8", // Light background color
        backgroundImage: `url(${BackgroundImage})`, // Add your background image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "80px", // Adjust top padding to make room for the header
      }}
    >
      <HeaderBar />
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={15}> {/* Adjusted Grid size */}
          {/* Removed the blue container, just displaying text */}
          <p style={{ fontSize: "25px", marginTop: "10px", textAlign: "center", color: "#0D1F23",fontWeight:"bold" }}>
            Stay updated with the latest Delays and Announcements.
          </p>

          <section id="goal-form1" style={{ marginBottom: "40px" }}>
            <DelayInput onAddGoal={addDelayHandler} />
          </section>

          <section id="goals1">
            <DelayList delayList={delayList} setDelayList={setDelayList} />
          </section>
        </Grid>
      </Grid>
    </div>
  );
}

export default AnnouncementandDelayReportsAdmin;

import React, { useRef, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import * as variables from "./variables";
import Logo from "./components/Logo";
import HALO from "vanta/dist/vanta.halo.min";
import ReactAudioPlayer from "react-audio-player";

const useStyles = createUseStyles({
  landing_background: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    // backgroundImage: "url(media/medium.jpg)",
    // backgroundSize: "cover",
  },
  landing_content: {
    height: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  landing_text: {
    textAlign: "center",
    "& > *": {
      color: variables.pumice,
      textTransform: "uppercase",
    },
  },
  landing_title: {
    fontSize: variables.fs_xl,
    fontWeight: variables.fw_light,
    marginBottom: variables.space1,
  },
  landing_subtitle: {
    fontSize: variables.fs_sm,
    fontWeight: variables.fw_medium,
    marginBottom: variables.space1,
  },
  landing_enter: {
    fontStyle: variables.fs_sm,
    fontWeight: variables.fw_bold,
    textDecoration: "none",
    "&:hover": {
      color: variables.pumice,
      "-webkit-text-stroke": "0px transparent",
      textShadow: "0px 0px 10px rgba(203,204,203,1)",
    },
  },
  landing_contact: {
    fontSize: variables.fs_xs,
    fontWeight: variables.fw_medium,
    color: variables.pumice,
    textTransform: "uppercase",
    textDecoration: "none",
    position: "absolute",
    bottom: variables.space1,
    right: variables.space1,
    marginBottom: "calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)))",
    "&:hover": {
      color: variables.pumice,
      "-webkit-text-stroke": "0px transparent",
      textShadow: "0px 0px 10px rgba(203,204,203,1)",
    },
  },
});

function App() {
  const classes = useStyles();

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <ReactAudioPlayer src="sound.mp3" autoPlay loop preload volume={0.5} />
      <div className={classes.landing_background} ref={vantaRef}></div>
      <div className={classes.landing_content}>
        <div className={classes.landing_text}>
          <h1 className={classes.landing_title}>benjamin arpage</h1>
          <h2 className={classes.landing_subtitle}>
            Creative Front-End Developer
          </h2>
        </div>
        <Logo />
        <a
          className={classes.landing_contact}
          href="mailto:benjaminarpage@gmail.com"
        >
          Contact
        </a>
      </div>
    </>
  );
}

export default App;

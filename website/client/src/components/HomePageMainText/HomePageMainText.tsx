import React from "react";
import { Typography, Fade } from "@mui/material";

function HomePageMainText() {
  return (
    <Fade in={true} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 2000 }}>
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente
        eum natus, unde dolorem vitae in aliquam. Consequuntur aperiam obcaecati
        sunt, cupiditate, voluptate quisquam accusamus nam quae perspiciatis
        blanditiis atque debitis sapiente harum distinctio recusandae ad.
        Blanditiis non, impedit velit odio obcaecati, excepturi aut recusandae
        commodi numquam mollitia reiciendis aliquam a eos sapiente temporibus
        officia, quos at reprehenderit repellendus alias sed culpa! Eaque, eos
        ipsum!
      </Typography>
    </Fade>
  );
}

export default HomePageMainText;

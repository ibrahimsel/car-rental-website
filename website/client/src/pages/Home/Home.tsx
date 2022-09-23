import { Box, Container, Grid } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import HomePageMainText from "../../components/HomePageMainText/HomePageMainText";
import CustomerTestimonial from "../../components/CustomerTestimonial/CustomerTestimonial";
import CustomerTestimonialHeader from "../../components/CustomerTestimonialHeader/CustomerTestimonialHeader";

function Home() {
  return (
    <Grid>
      <Navbar />
      {/* Info about the company */}
      <Grid
        container
        sx={{
          height: "100vh",
          backgroundColor: "#BFBDC1",
          color: "#fff",
        }}
      >
        <Grid
          item
          xs={11}
          sm={5}
          mx="auto"
          my="auto"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HomePageHeader />
        </Grid>
        <Grid
          item
          xs={11}
          sm={5}
          mx="auto"
          my="auto"
          sx={{
            border: "1px solid #fff",
            borderRadius: "2px",
            padding: 4,
          }}
        >
          <HomePageMainText />
        </Grid>
      </Grid>

      {/* Customer Testimonials */}
      <Grid container sx={{ height: "auto", backgroundColor: "#37323e" }}>
      <Grid
          item
          xs={12}
          mx="auto"
          my="auto"
          width="100%"
          sx={{
            backgroundColor: "#37323e",
          }}
          >
          <CustomerTestimonialHeader />
          </Grid>
        <Grid item xs={12} sm={6} lg={3} minWidth={300} my={6}>
          <CustomerTestimonial
            customerName="Bryan Cranston"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper lectus id nisi varius, vel consequat ex faucibus. Pellentesque enim sem, ornare at bibendum vitae, rutrum et sapien."
            alt="Bryan Cranston"
            image="https://www.hollywoodreporter.com/wp-content/uploads/2022/07/GettyImages-1403134660.jpg?w=865&h=485&crop=1"
            rating={5}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} minWidth={300} my={6}>
          <CustomerTestimonial
            customerName="Dwayne Johnson"
            comment="Pellentesque ut libero sit amet massa vehicula pulvinar. Sed pretium ante ac augue auctor tincidunt. Integer lorem lectus, consequat in molestie id, volutpat semper massa."
            alt="Dwayne Johnson"
            image="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
            rating={5}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} minWidth={300} my={6}>
          <CustomerTestimonial
            customerName="Rhea Seehorn"
            comment="Cras sit amet interdum elit. Praesent iaculis malesuada finibus. Sed luctus, enim gravida vulputate laoreet, orci est venenatis nunc, vitae tempus massa nunc et enim."
            alt="Rhea Seehorn"
            image="https://deadline.com/wp-content/uploads/2022/07/Rhea-Seehorn.png"
            rating={4.5}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} minWidth={300} my={6}>
          <CustomerTestimonial
            customerName="Keanu Reeves"
            comment="Cras convallis a lectus nec luctus. Quisque pellentesque ante ut ante eleifend consequat. Vivamus commodo massa in nibh varius, a mattis sapien scelerisque."
            alt="Keanu Reeves"
            image="https://static.birgun.net/resim/haber-detay-resim/2021/11/25/keanu-reeves-marvel-filmlerine-goz-kirpti-parcasi-olmaktan-onur-duyarim-947966-5.jpg"
            rating={5}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;

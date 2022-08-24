import Navbar from "../../components/Navbar/Navbar";
import CustomerTestimonial from "../../components/CustomerTestimonial/CustomerTestimonial";
import HomePageMainText from "../../components/HomePageMainText/HomePageMainText";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import CustomerTestimonialHeader from "../../components/CustomerTestimonialHeader/CustomerTestimonialHeader";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <Grid container>
      <Navbar />
      <Grid
        container
        sx={{
          height: "94vh",
          backgroundColor: "#020202",
          color: "white",
        }}
      >
        {/* Header on the home page */}
        <Grid
          item
          xs={5}
          sx={{
            mx: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HomePageHeader />
        </Grid>
        {/* Header on the home page */}

        {/* Info text on the home page */}
        <Grid
          item
          xs={5}
          sx={{
            mx: 2,
            my: "auto",
            border: "1px solid white",
            borderRadius: "2px",
            padding: 4,
          }}
        >
          <HomePageMainText />
        </Grid>
        {/* Info text on the home page */}
      </Grid>

      {/* Customer testimonials header */}
      <Grid container sx={{
      }}>
        <Grid
          item
          xs={12}
          sx={{
            borderRadius: "2px",
            padding: 2,
          }}
        >
          <CustomerTestimonialHeader />
        </Grid>
      </Grid>
      {/* Customer testimonials header */}

      {/* Customer Testimonials */}
      <Grid
        container
        sx={{
          height: "70vh",
        }}
      >
        <Grid item xs={3} minWidth={300} my={8}>
          <CustomerTestimonial
            customerName="Bryan Cranston"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper lectus id nisi varius, vel consequat ex faucibus. Pellentesque enim sem, ornare at bibendum vitae, rutrum et sapien."
            alt="Bryan Cranston"
            image="https://www.hollywoodreporter.com/wp-content/uploads/2022/07/GettyImages-1403134660.jpg?w=865&h=485&crop=1"
            rating={5}
          />
        </Grid>
        <Grid item xs={3} minWidth={300} my={8}>
          <CustomerTestimonial
            customerName="Dwayne Johnson"
            comment="Pellentesque ut libero sit amet massa vehicula pulvinar. Sed pretium ante ac augue auctor tincidunt. Integer lorem lectus, consequat in molestie id, volutpat semper massa."
            alt="Dwayne Johnson"
            image="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
            rating={5}
          />
        </Grid>
        <Grid item xs={3} minWidth={300} my={8}>
          <CustomerTestimonial
            customerName="Rhea Seehorn"
            comment="Cras sit amet interdum elit. Praesent iaculis malesuada finibus. Sed luctus, enim gravida vulputate laoreet, orci est venenatis nunc, vitae tempus massa nunc et enim."
            alt="Rhea Seehorn"
            image="https://deadline.com/wp-content/uploads/2022/07/Rhea-Seehorn.png"
            rating={4.5}
          />
        </Grid>
        <Grid item xs={3} minWidth={300} my={8}>
          <CustomerTestimonial
            customerName="Keanu Reeves"
            comment="Cras convallis a lectus nec luctus. Quisque pellentesque ante ut ante eleifend consequat. Vivamus commodo massa in nibh varius, a mattis sapien scelerisque."
            alt="Keanu Reeves"
            image="https://static.birgun.net/resim/haber-detay-resim/2021/11/25/keanu-reeves-marvel-filmlerine-goz-kirpti-parcasi-olmaktan-onur-duyarim-947966-5.jpg"
            rating={5}
          />
        </Grid>
      </Grid>
      {/* Customer Testimonials */}
    </Grid>
  );
}

export default Home;

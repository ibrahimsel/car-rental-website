import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import ITestimonialProps from "../../interfaces/ITestimonialProps/ITestimonialProps";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function CustomerTestimonial(props: ITestimonialProps) {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 400, mx: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="285"
          image={props.image}
          alt={props.alt}
        />
        <CardContent sx={{ height: 250 }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.customerName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.comment}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              my: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={props.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[props.rating]}</Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomerTestimonial;

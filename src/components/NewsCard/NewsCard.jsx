import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import featuredImage from "../../assets/blog.png";
import authorImage from "../../assets/person.png";

export default function NewsCard() {
  const blogs = [
    {
      title: "6 Tips To Protect Your Mental Health When You're Sick",
      date: "March 31, 2022",
      category: "Medical",
      author: "Rebecca Lee",
      featuredImage,
      authorImage,
    },
    {
      title: "Latest Advances in Cardiology",
      date: "April 10, 2022",
      category: "Cardiology",
      author: "John Doe",
      featuredImage,
      authorImage,
    },
    {
      title: "Understanding Chronic Pain",
      date: "May 05, 2022",
      category: "Healthcare",
      author: "Alice Johnson",
      featuredImage,
      authorImage,
    },
  ];

  const renderBlogCards = blogs.map((blog, index) => (
    <Grid item xs={12} md={4} key={index}>
      <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2}>
        <Box component="img" src={blog.featuredImage} width={1} />
        <Box p={2}>
          <Typography
            color="#77829D"
            fontWeight={500}
            mb={1}
            fontSize={{ xs: 12, md: 16 }}
          >
            {blog.category} | {blog.date}
          </Typography>
          <Typography
            component="h3"
            color="#1B3C74"
            fontSize={{ xs: 14, md: 18 }}
            fontWeight={500}
            lineHeight={1.2}
            mb={2}
          >
            {blog.title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              component="img"
              src={blog.authorImage}
              height={32}
              width={32}
            />
            <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
              {blog.author}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Grid>
  ));

  return (
    <Box py={6}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Read Our Latest News
        </Typography>

        <Grid container spacing={4}>
          {renderBlogCards}
        </Grid>
      </Container>
    </Box>
  );
}

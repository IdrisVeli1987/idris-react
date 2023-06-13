import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Rating,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Delete, HeartBroken } from "@mui/icons-material";

export const LearnMUI = () => {
  return (
    <>
      <div>Learn-MUI</div>
      {/* <Rating name="size-large" defaultValue={2} size="large" />
      <Checkbox
        color="primary"
        icon={<Delete />}
        checkedIcon={<HeartBroken />}
      />
      <Button
        color="warning"
        onClick={() => {
          console.log("Basildi");
        }}
        variant="contained"
      >
        Bas mənə
      </Button>
      <TextField label="Username" />
      <IconButton color="primary">
        <Delete />
      </IconButton>
      <Select>
        <MenuItem value="car">🚗</MenuItem>
        <MenuItem value="hand">🤚</MenuItem>
      </Select>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>Bir</Button>
        <Button>İki</Button>
        <Button>Üç</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Bir</Button>
        <Button>Iki</Button>
        <Button>Üç</Button>
      </ButtonGroup>
      <Typography variant="h1" component="a" href="https://www.google.com">
        Salam
      </Typography>
      <Container maxWidth="xl">
        <Box
          component="main"
          sx={{
            backgroundColor: { xs: "green", sm: "orange" },
            textAlign: "center",
          }}
        >
          salam
        </Box>
      </Container>
      <Stack gap={20} justifyContent="space-between" flexDirection="row">
        <Typography>Azer</Typography>
        <Typography>Camal</Typography>
        <Typography>Omer</Typography>
      </Stack> */}
      <Container>
        <Grid container>
          <Grid sx={{background:"green"}}  item xs={12} md={6} lg={4}>item1</Grid>
          <Grid sx={{background: "orange"}} item xs={12} md={6} lg={4}>item2</Grid>
        </Grid>
      </Container>
    </>
  );
};

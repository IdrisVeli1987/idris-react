import {
  Alert,
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Rating,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Delete, HeartBroken, Height } from "@mui/icons-material";

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
          <Grid sx={{ background: "green" }} item xs={12} md={6} lg={4}>
            item1
          </Grid>
          <Grid sx={{ background: "orange" }} item xs={12} md={6} lg={4}>
            item2
          </Grid>
        </Grid>
      </Container>
      <Paper elevation={3} sx={{ margin: 10, height: '200 vh' }}>
        Medimart
      </Paper>
      <AppBar>
        <nav>
          <a href="Dərmanlar">Link</a>
          <a href="Həblər">Link</a>
          <a href="Siroplar">Link</a>
          <a href="İynələr">Link</a>
          <a href="Qiymətlər">Link</a>
        </nav>
      </AppBar>
    </>
  );
};

import {
  Box,
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  IconButton,
  Icon,
} from "@mui/material";
import { Home, Search } from "@mui/icons-material";
import Image from "next/image";

export default function Header({
  handleSearch,
}: {
  handleSearch: (search: string) => void;
}) {
  // Function to handle search when the input is submitted
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload on form submission
    const searchValue = (event.target as HTMLFormElement).search.value; // Get the value from the input
    handleSearch(searchValue); // Call the handleSearch function with the input value
    console.log(searchValue);
  };

  return (
    <Box sx={{ marginBottom: 4 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#3b3b3b",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Home />
          </IconButton>
          <Image src="/img/logo.png" alt="Ptichka" width={50} height={50} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: 1 }}
          >
            Shop &quot;Bird &apos;n balls&quot;
          </Typography>
          <Box
            sx={{
              backgroundColor: "#636363",
              display: "flex",
              flexDirection: "row",
              minHeight: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              marginLeft: 2,
            }}
          >
            <Icon sx={{ paddingLeft: 3, paddingRight: 2 }}>
              <Search />
            </Icon>
            {/* Wrapping the input in a form to handle submit */}
            <form onSubmit={handleSubmit}>
              <InputBase
                placeholder="Search..."
                sx={{ color: "white", minWidth: 400 }}
                name="search" // Make sure to use a name attribute for the input field
              />
            </form>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </Box>
  );
}

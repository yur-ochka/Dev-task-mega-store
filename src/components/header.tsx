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
export default function Header() {
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
            <Home></Home>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Магазин &quot;Птички-яички&quot;
          </Typography>
          <Box
            sx={{
              backgroundColor: "	#636363",
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
              <Search></Search>
            </Icon>
            <InputBase
              placeholder="Search..."
              sx={{ color: "white", minWidth: 400 }}
            ></InputBase>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </Box>
  );
}

import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HospitalSearchBar() {
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  const [searchData, setSearchData] = useState({ state: "", city: "" });
  const navigate = useNavigate();

  // Fetch available states
  useEffect(() => {
    const loadStates = async () => {
      try {
        const { data } = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setAvailableStates(data);
      } catch (error) {
        console.error("Failed to fetch states:", error);
      }
    };

    loadStates();
  }, []);

  // Fetch cities based on the selected state
  useEffect(() => {
    if (searchData.state) {
      const loadCities = async () => {
        try {
          const { data } = await axios.get(
            `https://meddata-backend.onrender.com/cities/${searchData.state}`
          );
          setAvailableCities(data);
        } catch (error) {
          console.error("Failed to fetch cities:", error);
        }
      };

      setAvailableCities([]);  // Clear cities on state change
      setSearchData(current => ({ ...current, city: "" })); // Reset city field when state changes
      loadCities();
    }
  }, [searchData.state]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setSearchData(current => ({ ...current, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchData.state && searchData.city) {
      navigate(`/search?state=${searchData.state}&city=${searchData.city}`);
    }
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit} sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" }
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={searchData.state}
        onChange={handleFieldChange}
        startAdornment={
          <InputAdornment position="start"><SearchIcon /></InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="">State</MenuItem>
        {availableStates.map(state => (
          <MenuItem key={state} value={state}>{state}</MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={searchData.city}
        onChange={handleFieldChange}
        startAdornment={
          <InputAdornment position="start"><SearchIcon /></InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="">City</MenuItem>
        {availableCities.map(city => (
          <MenuItem key={city} value={city}>{city}</MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: "2rem" }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
}

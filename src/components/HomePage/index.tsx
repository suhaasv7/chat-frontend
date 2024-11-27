import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HomePage = () => {
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      console.log("Submitted:", name);
    }
  };

  return (
    <Box className="min-h-screen w-full bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <Box
        className="absolute inset-0 opacity-30"
        sx={{
          background:
            "radial-gradient(circle at center, #4F46E5 0%, transparent 70%)",
          animation: "pulse 8s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": {
              transform: "scale(1)",
              opacity: 0.3,
            },
            "50%": {
              transform: "scale(1.2)",
              opacity: 0.4,
            },
          },
        }}
      />

      {/* Login container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <Box
          className="rounded-2xl backdrop-blur-xl p-8"
          sx={{
            background: "rgba(30, 27, 75, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Typography
              variant="h5"
              className="text-center text-white font-medium mb-8"
              sx={{ letterSpacing: "0.5px" }}
            >
              Enter your name to join
            </Typography>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Box
                className="relative"
                sx={{
                  "&:hover": {
                    "& .input-highlight": {
                      opacity: 0.8,
                    },
                  },
                }}
              >
                <TextField
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter your name"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                      },
                      "& fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      "&::placeholder": {
                        color: "rgba(255, 255, 255, 0.5)",
                        opacity: 1,
                      },
                    },
                  }}
                />
                <motion.div
                  className="input-highlight absolute inset-0 rounded-xl pointer-events-none"
                  animate={{
                    boxShadow: isFocused
                      ? "0 0 20px rgba(99, 102, 241, 0.3)"
                      : "0 0 0px rgba(99, 102, 241, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Box>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
                  sx={{
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
                    },
                  }}
                >
                  Submit
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HomePage;

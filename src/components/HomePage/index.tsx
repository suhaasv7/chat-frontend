import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const HomePage = () => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      console.log("Submitted:", name);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Login container */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="rounded-2xl bg-opacity-25 bg-indigo-900/25 backdrop-blur-xl p-8 border border-white/10 shadow-xl">
          <div>
            <h5 className="text-center text-white font-medium mb-8 text-xl tracking-wide">
              Enter your name to join
            </h5>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <TextField
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  variant="outlined"
                />
              </div>

              <Button type="submit" fullWidth variant="contained">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

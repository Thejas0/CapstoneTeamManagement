import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TeamDetailsDialog from './TeamDetailsDialog';

const TeamCard = ({ teamName, domain, availableSlots, teamLeader, faculty, members }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const teamDetails = {
    teamName,
    domain,
    teamLeader,
    faculty,
    members: members || [],
  };

  // Create the circular slots
  const slots = Array.from({ length: 4 }, (_, index) => (
    <div
      key={index}
      className={`slot ${index < availableSlots ? 'green' : 'red'}`}
    />
  ));

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {teamName}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Domain: {domain}
        </Typography>
        <div className="team-card-content">
          <div className="slots">{slots}</div>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            View Team
          </Button>
        </div>
      </CardContent>
      <TeamDetailsDialog open={open} handleClose={handleClose} team={teamDetails} />
    </Card>
  );
};

export default TeamCard;

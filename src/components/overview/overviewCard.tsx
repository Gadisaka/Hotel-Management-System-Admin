interface CardProps {
  title: string;
  value: number | string;
  total: number | null;
  icon: React.ReactNode;
}
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";

const Card: React.FC<CardProps> = ({ title, value, icon, total }) => {
  return (
    <MuiCard sx={{ boxShadow: "none" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <div>
            <Typography color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" component="div" color="primary">
              {value}{" "}
              {total && (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  / {total}
                </Typography>
              )}
            </Typography>
          </div>
          <Box bgcolor="primary.light" color="white" p={2} borderRadius="50%">
            {icon}
          </Box>
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default Card;

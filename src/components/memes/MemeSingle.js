import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles({
  root: {
    width: 400,
    padding: 12,
  },
  media: {
    height: 340,
    backgroundSize: "contain",
    backgroundRepeat: "noRepeat",
  },
});

export default function MemeSingle(props) {
  const classes = useStyles();

  const borderStar = <StarBorderIcon />;
  const filledStar = <StarIcon />;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.meme.img}
          title={props.meme.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.meme.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size='small' color='primary'>
          <ArrowUpwardIcon
            id={`up-${props.meme.id}`}
            onClick={props.onUpvote}
          />
          {props.meme.upvotes}
        </IconButton>
        <IconButton size='small' color='primary'>
          <ArrowDownwardIcon
            id={`down-${props.meme.id}`}
            onClick={props.onDownvote}
          />
          {props.meme.downvotes}
        </IconButton>
        <Button
          size='small'
          color='primary'
          onClick={props.onToggleStar}
          id={`star-${props.meme.id}`}>
          {props.meme.isFavorite ? filledStar : borderStar}
        </Button>
      </CardActions>
    </Card>
  );
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, FormGroup, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Price from '../common/price/Price.jsx';
import Rating from '../common/rating/Rating.jsx';

const API_HOST = 'https://warsawjs-workshop-32-book-it-m.herokuapp.com';

const styles = theme => ({
  card: {
    maxWidth: '100%',
  },
  sortingTabs: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '30%',
  },
  actions: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  suggestionsContainer: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: theme.zIndex.appBar,
    marginTop: theme.spacing.unit * -1,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  floatRight: {
    marginLeft: 'auto',
  },
  accommodations: {
    marginRight: theme.spacing.unit,
  },
});

class AccommodationList extends Component {
  static propTypes = {
    classes: PropTypes.object,
    accommodations: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    sorting: PropTypes.number.isRequired,
    favorites: PropTypes.array.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onDetails: PropTypes.func.isRequired,
    onFiltersChange: PropTypes.func.isRequired,
  };

  state = {
    shareId: '',
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    fetch(`${API_HOST}/suggestions?search=${value}`).then(response => {
      response.json().then(({ suggestions }) => {
        this.setState({ suggestions });
      });
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleSortingChange = (event, sorting) => {
    this.props.onSortingChange({ sorting });
  };

  handleSearchChange = (event, { newValue } = {}) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      search: newValue || event.target.value,
    });
  };

  handleFiltersCentreChange = (event) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      centre: event.target.value,
    });
  };

  handleFiltersPriceChange = (event) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      minPrice: event.target.value,
    });
  };

  handleFiltersMinAvgRatingChange = (event) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      minAvgRating: event.target.value,
    });
  };

  handleFiltersMinReviewsCountChange = (event) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      minReviewsCount: event.target.value,
    });
  };

  handleShareDialogOpen = (shareId) => {
    this.setState({ shareId });
  };

  handleShareDialogClose = () => {
    this.setState({ shareId: '' });
  };

  getSuggestionValue(suggestion) {
    return suggestion.label;
  }

  renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) =>
            part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            ),
          )}
        </div>
      </MenuItem>
    );
  }

  renderInputComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <TextField
        fullWidth
        margin="normal"
        variant="outlined"
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            input: classes.input,
          },
        }}
        {...other}
      />
    );
  }

  renderShareButton(id) {
    return (
      <div>
        <IconButton aria-label="Share" onClick={() => this.handleShareDialogOpen(id)}>
          <ShareIcon />
        </IconButton>
        <Dialog
          fullScreen={this.props.fullScreen}
          open={this.state.shareId === id}
          onClose={this.handleShareDialogClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Copy this link and share!"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`${window.location.origin}/details?id=${id}`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleShareDialogClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

  render() {
    const {
      classes,
      accommodations,
      filters,
      sorting,
      favorites,
      onFavorite,
      onSearch,
      onDetails,
    } = this.props;

    return (
      <Grid container>
        <Grid item xs={3}>
          <div className={classes.toolbar}>
            <Typography variant="h6">Search</Typography>
            <FormGroup>
              <Autosuggest
                renderSuggestion={this.renderSuggestion}
                getSuggestionValue={this.getSuggestionValue}
                renderInputComponent={this.renderInputComponent}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                inputProps={{
                  classes,
                  placeholder: 'Destination',
                  value: filters.search,
                  onChange: this.handleSearchChange,
                }}
                theme={{
                  container: classes.suggestionsContainer,
                  suggestionsContainerOpen: classes.suggestionsContainerOpen,
                  suggestionsList: classes.suggestionsList,
                  suggestion: classes.suggestion,
                }}
                renderSuggestionsContainer={options => (
                  <Paper {...options.containerProps} square>
                    {options.children}
                  </Paper>
                )}
              />
              <Button onClick={onSearch} variant="outlined" color="primary" className={classes.button}>
                Search
              </Button>
              <TextField
                id="centre"
                label="Max. centre distance"
                className={classes.textField}
                value={filters.centre}
                onChange={this.handleFiltersCentreChange}
                margin="normal"
                variant="outlined"
                type="number"
                inputProps={{
                  step: 1,
                  min: 0,
                }}
              />
              <TextField
                id="minPrice"
                label="Min. price"
                className={classes.textField}
                value={filters.minPrice}
                onChange={this.handleFiltersPriceChange}
                margin="normal"
                variant="outlined"
                type="number"
                inputProps={{
                  step: 100,
                  min: 0,
                }}
              />
              <TextField
                id="minAvgRating"
                label="Min. average rating"
                className={classes.textField}
                value={filters.minAvgRating}
                onChange={this.handleFiltersMinAvgRatingChange}
                margin="normal"
                variant="outlined"
                type="number"
                inputProps={{
                  step: 1,
                  min: 0,
                }}
              />
              <TextField
                id="minReviewsCount"
                label="Min. reviews count"
                className={classes.textField}
                value={filters.minReviewsCount}
                onChange={this.handleFiltersMinReviewsCountChange}
                margin="normal"
                variant="outlined"
                type="number"
                inputProps={{
                  step: 10,
                  min: 0,
                }}
              />
              <Button onClick={onSearch} variant="outlined" color="primary" className={classes.button}>
                Search
              </Button>
            </FormGroup>
          </div>
        </Grid>
        <Grid item xs={9}>
          {accommodations.errors ? (
            <Typography variant="body1">{accommodations.errors}</Typography>
          ) : (
            <React.Fragment>
              {accommodations.fetching ? (
                <CircularProgress size="100%" thickness={2} />
              ) : (
                <React.Fragment>
                  {accommodations.data && accommodations.data.length === 0 && (
                    <Typography variant="h3">No results found</Typography>
                  )}
                  {accommodations.data && accommodations.data.length > 0 && (
                    <div className={classes.accommodations}>
                      <Typography variant="h3">{`${accommodations.data.length} results found`}</Typography>
                      <Paper className={classes.sortingTabs}>
                        <Tabs
                          value={sorting}
                          onChange={this.handleSortingChange}
                          indicatorColor="primary"
                          textColor="primary"
                          centered
                        >
                          <Tab label="Best rated" />
                          <Tab label="Most reviewed" />
                          <Tab label="Cheapest" />
                          <Tab label="Most expensive" />
                        </Tabs>
                      </Paper>
                      {accommodations.data.map((item, idx) => (
                        <Card className={classes.card} key={idx}>
                          <CardHeader
                            avatar={<Rating rating={item.rating} />}
                            action={<Price price={item.price} />}
                            title={item.title}
                            subheader={item.location.centre + ' - ' + item.location.address}
                          />
                          <CardMedia
                            className={classes.media}
                            image={item.cover.url}
                            title={item.title}
                          />
                          <CardContent>
                            {item.insights.map((item, idx) => (
                              <Typography key={idx} component="p">{item.text}</Typography>
                            ))}
                          </CardContent>
                          <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton
                              onClick={() => { onFavorite(item); }}
                              aria-label="Add to favorites"
                            >
                              <FavoriteIcon color={favorites.map(({ id }) => id).includes(item.id) ? 'error' : 'disabled'} />
                            </IconButton>
                            {this.renderShareButton(item.id)}
                            <Button
                              aria-label="Details"
                              className={classes.floatRight}
                              onClick={() => onDetails(item.id)}
                            >
                              Details
                            </Button>
                          </CardActions>
                        </Card>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AccommodationList);

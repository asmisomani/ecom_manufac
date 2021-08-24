import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import QueueIcon from "@material-ui/icons/Queue";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LinkIcon from "@material-ui/icons/Link";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import StoreIcon from "@material-ui/icons/Store";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { useState } from "react-dom";
import { Link } from "react-router-dom";
import { Assignment } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import { Divider } from "@material-ui/core";
import {Offcanvas} from "react-bootstrap";

import help from "../images/support.svg"


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = React.useState(null);

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className="bg-light"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit " onClick={handleShow}>
          <ContactSupportIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Manufacturer
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={searchHandler}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleShow}>
              <ContactSupportIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <div className="leftbar d-flex flex-column align-items-center justify-content-between w-min-content ">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Tooltip title="Dashboard" placement="right">
          
          <IconButton color="var(--primary-1)">
            <DashboardIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Orders" placement="right">
          
          <IconButton color="var(--primary-1)">
            <StoreIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Inventory" placement="right">
          
          <IconButton color="var(--primary-1)">
            <QueueIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Shipping" placement="right">
          
          <IconButton color="var(--primary-1)">
            <LocalShippingIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Finance" placement="right">
          
          <IconButton color="var(--primary-1)">
            <AccountBalanceIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Review" placement="right">
          
          <IconButton color="var(--primary-1)">
            <RateReviewIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Report" placement="right">
          
          <IconButton color="var(--primary-1)">
            <DescriptionIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Record" placement="right">
          
          <IconButton color="var(--primary-1)">
            <AssignmentIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Connect" placement="right">
          
          <IconButton color="var(--primary-1)">
            <LinkIcon />
          </IconButton>
        </Tooltip>
        <hr/>
        <Tooltip title="Sign Out" placement="right">
          <IconButton color="var(--primary-1)">
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="false">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={help} height="100px"/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, vitae.
          <Link to="/meet" className="schedule_a_meet" >schedule a video call</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}


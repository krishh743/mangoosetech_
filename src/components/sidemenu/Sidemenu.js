import * as React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import {Stack, Switch} from '@mui/material';
import './Sidemenu.css'
import UserInfo from '../../pages/UserInfo';
import Details from '../../pages/Details';
import {useState} from 'react';

const label = {inputProps: {'aria-label': 'Switch demo'}};
const drawerWidth = 340;
function ResponsiveDrawer(props) {
    const [togle, setTogle] = useState("page1")

    const handleDrawerToggle = () => {
        setTogle(prePage => (prePage === "page1" ? "page2" : "page1"))
    };

    const drawer = (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: "column", gap: "40px", alignItems: "center", backgroundColor: "azure"}}>
            <div className='side-card'>
                <Stack direction="row" spacing={3}>
                    <Stack>
                        <div className="image-section">
                            <img alt='' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
                        </div>
                    </Stack>
                    <Stack spacing={2}>
                        <Stack>
                            <span className="big-text">Hi, Reader</span>
                        </Stack>
                        <Stack>
                            <span>Here yours news</span>

                        </Stack>
                    </Stack>
                </Stack>
            </div>
            <div className='side-card'>
                <Stack direction="column" spacing={3} alignItems={"center"}>
                    <Stack>
                        <h2>View Toggle</h2>
                    </Stack>
                    <Stack spacing={2} direction={"row"}>
                        <Stack>
                        </Stack>
                        <Stack>
                            <div
                                onClick={handleDrawerToggle}
                                className={`toggle-div ${togle === "page1" ? "active" : ""}`}
                                style={{width: "250px", height: "100px", borderRadius: "10px", display: "flex", cursor: "pointer"}}
                            >
                                <div style={{backgroundColor: "green", width: "50%", height: "100%"}}>
                                    left
                                </div>
                                right
                            </div>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
            <div className='side-card'>
                <Stack direction="column" alignItems={"center"} spacing={2}>
                    <Stack>
                        <h2>Have a Feedback?</h2>
                    </Stack>
                    <Stack>
                        <div className="feedback">
                            <span>we are Listening</span>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </div>
    );

    return (
        <Box sx={{display: 'flex', backgroundColor: "azure"}}>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"
                    sx={{

                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                {togle === "page1" ? <Details /> :
                    <UserInfo />}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;

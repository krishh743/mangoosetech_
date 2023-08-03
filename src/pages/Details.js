import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetails} from '../redux/ApiService';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
 import "./UserInfo.css"

function Details() {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.data);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(fetchDetails());
    }, [dispatch]);

    if (loading) {
        return <div className='kit-container'>
            <div className='loader'>Loading...</div>
        </div>
    }

    console.log(data, "movies")
    return (
        <div>
            <div className="side-card2">
                {
                    data.map((item, index) => (
                        <>
                            <Stack direction={"row"} spacing={2} alignItems={"center"} >
                                <Stack alignItems={"center"} justifyContent={"center"}>
                                    <div className="paper-card" key={index} onClick={handleClickOpen}>
                                            <Stack direction={"row"} spacing={2}>
                                                <Stack >
                                                    <div className="image-section">
                                                        <img
                                                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                                            alt="green iguana"
                                                        />
                                                    </div>
                                                </Stack>
                                                <Stack >
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {item.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {item.body}
                                                        </Typography>
                                                    </CardContent>
                                                </Stack>
                                            </Stack>
                                            <Stack>
<span className="time-text">Monday, 21 dec 2022 14:57GMT</span>
                                            </Stack>
                                    </div>
                                </Stack>
                                <Stack><CancelSharpIcon sx={{fontSize:"60px",cursor:"pointer"}}/></Stack>
                            </Stack>


                        </>
                    ))
                }

            </div>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' onClick={handleClose}>cancel</Button>
                        <Button variant='contained' onClick={handleClose} autoFocus>
                            Read
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default Details

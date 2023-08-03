import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetails} from '../redux/ApiService';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import './UserInfo.css';

function UserInfo() {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchDetails());
    }, [dispatch]);

    if (loading) {
        return (
            <div className='kit-container'>
                <div className='loader'>Loading...</div>
            </div>
        );
    }

    const chunksData = (arr, chunkSize) => {
        const chunks = [];
        for (let i = 0;i < arr.length;i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    };

    return (
        <div>
            <div className='side-card2'>
                {chunksData(data, 3).map((row, rowIndex) => (
                    <div key={rowIndex} className='card-row'>
                        {row.map((item, index) => (
                            <Card key={index} sx={{maxWidth: 345}}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant='h5' component='div'>
                                            {item.title}
                                        </Typography>
                                        <Typography variant='body2' color='text.secondary'>
                                            {item.body}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component='img'
                                        height='140'
                                        image='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                                        alt='green iguana'
                                    />
                                </CardActionArea>
                            </Card>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserInfo;

import { Box, IconButton, makeStyles, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Add } from '@material-ui/icons';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../..';
import { StudentActionTypes } from '../../store/reducers/StudentReducer/student.actionTypes';
function UploadResume() {
  const theme = useTheme();
  const [uploadNewResume, setUploadNewResume] = useState<any>();
  const [msg, setMsg] = useState('');
  const authState = useSelector((state: RootState) => state.authState);
  const handleFileSelected = (e: any) => {
    const files: any[] = Array.from(e.target.files);
    console.log('files:', files);
    setUploadNewResume(files[0]);
  };
  const classes = useStyles();
  const formData = new FormData();
  const dispatch = useDispatch();
  const onUpload = async () => {
    formData.append('resume', uploadNewResume, uploadNewResume?.name);

    const updatedStudent = await fetch(baseURL + '/students/resume', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => JSON.parse(data))
      .catch((error) => console.error(error));
    console.log(updatedStudent);
    setMsg('Resume Uploaded Successfully');
    setUploadNewResume('');
    dispatch({ type: StudentActionTypes.SET_STUDENT, payload: updatedStudent });
  };
  return (
    <div>
      <Box
        style={{
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
          borderStyle: 'solid',
          borderRadius: 5,
          backgroundColor: theme.palette.primary.contrastText,
        }}
        p={2}
      >
        Some tips on good resume.... Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Tempora animi, voluptates nulla dolorum molestiae magni doloremque nobis vero assumenda
        excepturi sunt exercitationem aliquam possimus hic expedita repellendus? Cupiditate,
        mollitia quo!
      </Box>
      <Box className={classes.flexContainer}>
        <label htmlFor='add-attachment' style={{ display: 'inline-block' }}>
          <Box
            className={classes.fileStyling}
            display='flex'
            mr={2}
            width='auto'
            alignItems='center'
          >
            <Add style={{ fontSize: '1rem', marginRight: '5px' }} />
            <div style={{ paddingRight: '10px' }}>Choose Resume</div>
          </Box>
        </label>
        <input type='file' id='add-attachment' hidden onChange={handleFileSelected} />
        {uploadNewResume && (
          <span className={classes.fileStyling}>
            <IconButton
              style={{ padding: 0, marginRight: '4px' }}
              onClick={() => {
                setUploadNewResume('');
              }}
            >
              <CloseIcon style={{ fontSize: '1rem', color: '#6087F6' }} />
            </IconButton>
            {uploadNewResume?.name}
          </span>
        )}
        <IconButton
          style={{
            marginLeft: 'auto',
            padding: '0 1rem',
            display: 'flex',
            alignItems: 'center',
          }}
          className={classes.fileStyling}
          onClick={onUpload}
        >
          <CloudUploadIcon style={{ color: '#6087F6', fontSize: '2rem' }} />
          <Typography variant='button' style={{ marginLeft: '10px' }}>
            UPLOAD
          </Typography>
        </IconButton>
      </Box>
      <Box p={3} textAlign='center'>
        <Typography variant='caption' style={{ color: 'green' }}>
          {msg}
        </Typography>
      </Box>
    </div>
  );
}
const useStyles = makeStyles({
  fileStyling: {
    color: '#1D3A8F',
    backgroundColor: '#EBF0FF',
    padding: '.6rem',
    border: '1px solid #6087F6',
    borderRadius: '1rem',
    fontSize: '0.8rem',
  },
  flexContainer: {
    padding: '.3rem 1rem',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: '1rem',
    },
  },
});
export default UploadResume;

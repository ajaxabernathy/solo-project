import React from 'react';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import axios from 'axios';

const fileTypes = ["WAV", "MP3"];

function DragAndDrop() {

  const [file, setFile] = useState(null);

  const handleChange = (file) => {

    setFile(file);

    const form = new FormData();
    form.append('file', file);
    form.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post('/api', form, config).then((response) => {
      console.log(response.data);
    });
}
    console.log(file)
  return (
    <>
    <FileUploader className="uploader" multiple="true" handleChange={handleChange} name="file" enctype="multipart/form-data" types={fileTypes} />
    </>
  );
}
export default DragAndDrop;
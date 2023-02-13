import { useState } from 'react';
import Link from "next/link";
import { CldUploadWidget } from 'next-cloudinary';

export default function Upload() {

  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState();

  const handleUpload = (error, result, widget) => {
    setAttempts(prev => prev + 1);
    if (error) {
      console.error(`Error: ${result.statusText}`);
      setError(result.statusText);
    }
  };

  return (
    <>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/upload">Upload widget</Link></li>
        <li><Link href="/another">Another page</Link></li>
      </ul>
      <h1>Upload widget</h1>
      <pre>Attempts: {attempts}</pre>
      <pre>Error: {error}</pre>
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset="io41hln3">
        {
          ({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button onClick={handleOnClick}>
                Upload an Image
              </button>
            );
          }
        }
      </CldUploadWidget>
    </>
  )
}

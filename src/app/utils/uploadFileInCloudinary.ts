import { v2 as cloudinary } from 'cloudinary';
import config from '../config';
import fs from 'fs'

export const uploadFileInCloudinary = async(imageName:string,filePath:string) => {
 // Configuration
 cloudinary.config({ 
    cloud_name: config.cloud_name, 
    api_key: config.api_key, 
    api_secret: config.api_secret 
});

return new Promise((resolve,reject)=>{
    cloudinary.uploader
    .upload(
      filePath, {
            public_id: imageName,
            folder:'mobile-shop/uploads/'
        },
        
    ) .then((result) => {
        resolve(result); 
        fs.unlink(filePath, (error) => {
          if (error) {
            reject(error)
          } else {
          console.log('File deleted successfully' );
          }
        });
    }).catch((error) => {
       reject(error)
    });
})
}


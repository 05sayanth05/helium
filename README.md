# helium
   a simple local server for backing up files.
   
# changes need to done:
    * remove express-fileupload (too slow on large size files) and it uploads files to RAM and then moves to secondary storage  
    * add formidable instead of express-file upload (check speed)
    
# currently used packages:
   * express
   * express-fileupload
   * ejs

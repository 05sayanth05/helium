# helium
   a simple local server for backing up files.
   
# changes need to done:
    * remove express-fileupload (too slow on large size files) and it uploads files to main memory and then moves to secondary storage(main memory issue fixed)
    * add formidable instead of express-file upload (check speed)
    
# currently used packages:
   * express
   * express-fileupload
   * ejs

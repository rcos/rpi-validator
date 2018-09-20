# rpi-validator
This repository contains string validation specific to RPI. Powered by Rensselaer Center for the Open Source.

This package only validates strings. It does not validate inputs with `number` or other types.

### Example ###
```
let rpiValidator = require('rpi-validator');

rpiValidator.isRIN('shirley');   //false
rpiValidator.isRIN('667986864'); //true
```

### Available Validators ###
- isISO()
- isRIN()
- isSubjectCode()
- isRPIEmail()

### Contributing ###

Anybody is welcome to contribute to this repository. It's what open source is all about. Make sure code is tested and that the existing tests pass. Please use issues to track bugs and/or changes.

This repository requires node to be installed in order for it to run. I think it requires version 8 or higher.

Run `yarn install` to install all dependencies before starting work.

Run the tests using `yarn test`.

### Past Contributors ###

Feel free to reach out with any questions about the repository. However, issues are the best way to get changes made.

- [Jake Billings](https://jakebillings.com)

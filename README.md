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

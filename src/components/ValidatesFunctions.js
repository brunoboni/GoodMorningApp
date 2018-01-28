export const validate = props => {
    const error = {}
    error.addresstype = ''
    error.street = ''
    error.number = ''
    error.zipcode = ''
    var addresserr = props.addresstype;
    var streeterr = props.street;
    var numbererr = props.number;
    var zipcodeerr = props.zipcode;
    //Validation rules
    if (props.addresstype === undefined) {
        addresserr = '';
    }
    if (props.street === undefined) {
        streeterr = '';
    }
    if (props.number === undefined) {
        numbererr = '';
    }
    if (props.zipcode === undefined) {
        zipcodeerr = '';
    }

    if (props.addresstype === 'undefined' || props.addresstype === '')
        error.addresstype = 'Error in addres type'
    if (!props.street || props.street === '' || props.street.length < 5)
        error.street = 'Error in Street field'
    if (!props.number)
        error.number = 'Error in Number Field'
    if (!props.zipcode || props.zipcode.length != 8)
        error.zipcode = 'Error in ZipCode field'

    return error;
}


import { body, Result, ValidationChain, ValidationError } from 'express-validator';
import {Priority} from '../../enum/priority'
import { Status } from '../../enum/status';

export const createValidator : ValidationChain[] = [

    body('title')
    .not()
    .isEmpty()
    .withMessage('title can not be empty')
    .trim()
    .isString()
    .withMessage('title must be a string'),
    body('date')
    .not().isEmpty()
    .isString().withMessage('task date must be in date format')
    .matches(/^(19|20|21)\d\d\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/)
    .withMessage('date string should be of format: YYYY/MM/DD'),
    body('description').trim().isString()
    .withMessage('description should be in string'),
    body('priority').trim().isIn([Priority.HIGH, Priority.MEDIUM, Priority.LOW]).withMessage('priority value is not valid').not().isEmpty().withMessage("priority cannot be empty"),
    body('status').trim().isIn([Status.DONE, Status.IN_PROGRESS, Status.TODO
    ]).withMessage('status value is invalid').not().isEmpty()
    .withMessage('status cannot be empty')
];

export function getErrorMessages(errors : Result<ValidationError>) : string  {

    if (!errors.isEmpty()) {
        const  errMsg : string[] = []
         errors.array().map(err => errMsg.push(err.msg))
         
 return errMsg.join("\n")
}
return ""
}
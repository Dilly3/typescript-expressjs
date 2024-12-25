
import {Column, Entity,PrimaryGeneratedColumn} from 'typeorm';
import { Status} from '../enum/status'
import {Priority} from '../enum/priority'

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id : string
    @Column( {
        type: 'text'
    })
    title : string
    @Column({
        type: 'varchar',
        length: 256
    })
    date : string
    @Column({
        type: 'varchar',
        length:256
    })
    description : string
    @Column({
        type: 'enum',
        enum: Priority,
        default:Priority.LOW   
    })
    priority : Priority
    @Column({
        type: 'enum',
        enum: Status,
        default: Status.TODO
    })
    status: Status


}
import {AttributeId, AttributeDataType} from "./DivisionTypes";
/**
 * Created by Alex on 03.04.2016.
 */
export interface DivisionAttribute {
    id: AttributeId
    description: string
    datatype?: AttributeDataType // default -> number
    hardcap?: number
}
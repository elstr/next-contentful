import { renderer } from "../../../utils/getReactComponent"

const Atf = fields => {
    console.log({fields})
    return Object.keys(fields).map(k => renderer(fields[k]))
}


export default Atf
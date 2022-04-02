import { ReposType } from '../../types/types'
import * as C from './styles'

import LockImg from '../../svgs/lock.svg'
import UnlockImg from '../../svgs/unlock.svg'

type Props = {
    data: ReposType
}

export default ({ data }: Props) => {
    return (
        <a href={data.html_url} style={{ textDecoration: 'none' }}>
            <C.Container>
                <div>
                    <h3>
                        <img src={data.private ? LockImg : UnlockImg} alt="privacy" />
                        {data.name}
                    </h3>
                    <span>{data.language}</span>
                </div>
                <p>{data.description ?? 'Empty Description'}</p>
            </C.Container>
        </a>
    )
}